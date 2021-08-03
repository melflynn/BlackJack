const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const http = require("http");
const socketIo = require("socket.io");
const httpServer = http.Server(app);
const io = socketIo(httpServer);

const users = require('./routes/api/users');
const games = require('./routes/api/games');

mongoose 
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => res.send("BlackJack"));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/games", games);


rooms = {}

let deck = [{'name': '2C', 'value': 2}, {'name': '2D', 'value': 2}, {'name': '2H', 'value': 2}, {'name': '2S', 'value': 2}, {'name': '3C', 'value': 3}, {'name': '3D', 'value': 3}, {'name': 
'3H', 'value': 3}, {'name': '3S', 'value': 3}, {'name': '4C', 'value': 4}, {'name': '4D', 'value': 4}, {'name': '4H', 'value': 4}, {'name': '4S', 'value': 4}, {'name': '5C', 'value': 5}, {'name': '5D', 'value': 5}, {'name': '5H', 'value': 5}, {'name': '5S', 'value': 5}, {'name': '6C', 'value': 6}, {'name': '6D', 'value': 6}, {'name': '6H', 'value': 6}, {'name': '6S', 'value': 6}, {'name': '7C', 'value': 7}, {'name': '7D', 'value': 7}, {'name': '7H', 'value': 7}, {'name': '7S', 'value': 7}, {'name': '8C', 'value': 8}, {'name': '8D', 'value': 8}, {'name': '8H', 'value': 8}, {'name': '8S', 'value': 8}, {'name': '9C', 'value': 9}, {'name': '9D', 'value': 9}, {'name': '9H', 'value': 9}, {'name': '9S', 'value': 9}, {'name': '10C', 'value': 10}, {'name': '10D', 'value': 10}, {'name': '10H', 'value': 10}, {'name': '10S', 'value': 10}, {'name': 'JC', 'value': 10}, {'name': 'JD', 'value': 10}, {'name': 'JH', 'value': 10}, {'name': 'JS', 'value': 10}, {'name': 'QC', 'value': 10}, {'name': 'QD', 'value': 10}, {'name': 'QH', 'value': 10}, {'name': 'QS', 'value': 10}, {'name': 'KC', 'value': 10}, {'name': 'KD', 'value': 10}, {'name': 'KH', 'value': 10}, {'name': 'KS', 'value': 10}, {'name': 'AC', 'value': 11}, {'name': 'AD', 'value': 11}, {'name': 'AH', 'value': 11}, {'name': 'AS', 'value': 11}]

const shuffleDeck = () => {
  let newDeck = deck.slice()
  for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
}

const createGame = (username) => {
  let gameDeck = shuffleDeck()
  let house = {username: null, hand: [gameDeck.pop(), gameDeck.pop()]}
  let p1 = {username, hand: [gameDeck.pop(), gameDeck.pop()]}

  let game = {
    players: [house, p1],
    deck: gameDeck,
    currentPlayer: 1,
    gameState: 'waiting',
  }
  return game;
}

const resetGame = (oldGame) => {
  let gameDeck = shuffleDeck()
  let house = {username: null, hand: [gameDeck.pop(), gameDeck.pop()]}
  let oldPlayers = oldGame.players.slice(1).map((player) => ({username: player.username, hand: [gameDeck.pop(), gameDeck.pop()]}))
  let game = {
    players: [house].concat(oldPlayers),
    deck: gameDeck,
    currentPlayer: 1,
    gameState: 'waiting',
  }
  return game
}

const currState = (game) => {
  let players = game.players
  let currentPlayer = game.currentPlayer
  let gameState = game.gameState
  return JSON.stringify({players, currentPlayer, gameState})
}

const hit = (game) => {
  game.players[game.currentPlayer].hand.push(game.deck.pop())
  let total = game.players[game.currentPlayer].hand.reduce((prev, curr) => prev + curr.value, 0)
  if (total > 21) {
    game.currentPlayer = (game.currentPlayer + 1) % (game.players.length)
  }
  checkHouse(game)
}


const checkHouse = (game) => {
  if (game.currentPlayer == 0) {
    let house = game.players[0]
    let houseVal = game.players[game.currentPlayer].hand.reduce((prev, curr) => prev + curr.value, 0)
    while (houseVal < 17) {
      let newCard = game.deck.pop()
      house.hand.push(newCard)
      houseVal = houseVal + newCard.value
    }
    game.gameState = 'finished'
  }
}

const addNewPlayer = (game, username) => {
  if (game.players.find((player) => player.username === username)) {
    return
  } else {
    game.players.push({username, hand: [game.deck.pop(), game.deck.pop()]})
  }
}

removePlayer = (gameId, username) => {
  if (!rooms[gameId]) {
    return
  } else {
    rooms[gameId].players = rooms[gameId].players.filter((player) => player.username !== username)
  }
}

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    let gameId = socket.gameId
    removePlayer(gameId, socket.username)
    io.to(socket.gameId).emit("new message", currState(rooms[gameId]));
  });

  socket.on("join game", ({gameId, username}) => {
    socket.join(gameId);
    socket.gameId = gameId
    socket.username = username
    if (rooms[gameId]) {
      addNewPlayer(rooms[gameId], username)
    } else {
      rooms[gameId] = createGame(username);
    }
    io.to(socket.gameId).emit("new message", currState(rooms[gameId]));
  })

  socket.on("leave game", ({gameId, username}) => {
    socket.leave(gameId);
    console.log(username + " left game: " + gameId);
  })

  socket.on('restart game', () => {
    rooms[socket.gameId] = resetGame(rooms[socket.gameId])
    io.to(socket.gameId).emit("new message", currState(rooms[socket.gameId]));
  })

  socket.on('start game', () => {
    console.log('start game');
    rooms[socket.gameId].gameState = 'playing'; 
    io.to(socket.gameId).emit("new message", currState(rooms[socket.gameId]));
  })

  socket.on('hit', () => {
    hit(rooms[socket.gameId])
    io.to(socket.gameId).emit("new message", currState(rooms[socket.gameId]));
  })

  socket.on('stand', () => {
    let game = rooms[socket.gameId]
    game.currentPlayer = (game.currentPlayer + 1) % (game.players.length)
    checkHouse(game)
    io.to(socket.gameId).emit("new message", currState(rooms[socket.gameId]));
  })
})

setInterval(() => {
  console.log('clearing rooms')
  Object.keys(rooms).forEach((gameId) => {
    if (rooms[gameId].players.length == 1) {
      console.log('removing game: ' + gameId)
      delete rooms[gameId]
    }
  })
}, 50000);

const port = process.env.PORT || 5000;

httpServer.listen(port, () => console.log(`Server is running on port ${port}`));