const express = require('express');
const router = express.Router();
const passport = require('passport');
const Game = require('../../models/Game');
const Card = require('../../models/Card');

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

let cardValues = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'A']
let cardSuits = ['S', 'D', 'H', 'C']
let deck = []
cardSuits.forEach((suit) => {
  cardValues.forEach((value) => {
    let card = new Card({
      name: `${value}${suit}`,
      value,
      hidden: true
    });
    deck.push(card);
  });
});
shuffleDeck(deck);

//create a game
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let id = req.user._id;
    const newGame = new Game({
      players: {[id]: [deck.pop(), deck.pop()]},
      currentPlayerId: id,
      houseCards: [deck.pop(), deck.pop()],
      deck: deck
    })

    newGame.players[id][0].hidden = false;
    newGame.players[id][1].hidden = false;
    newGame.houseCards[0].hidden = false;

    newGame.save()
      .then(game => res.json(game));
  }
)

//draw a card to current player
router.patch('/:gameId/draw', (req, res) => {
  Game.findById(req.params.gameId)
    .then(game => {
      let newCard = game.deck.pop();
      newCard.hidden = false;
      game.players[game.currentPlayerId].push(newCard);
      game.markModified('players');
      game.save().then(game => res.json(game));
    })
})

//switch players
router.patch('/:gameId/turn', (req, res) => {
  Game.findById(req.params.gameId)
    .then(game => {
      // debugger;
      let players = Object.keys(game.players);
      console.log(players);
      let currentIdx = players.indexOf(`${game.currentPlayerId}`);
      console.log(currentIdx);
      console.log(game.currentPlayerId);
      game.currentPlayerId = players[((currentIdx + 1) % players.length)];
      // game.markModified('currentPlayerId');
      game.save().then(game => res.json(game));
    })
})

//add a player to game
router.patch('/:gameId/newPlayer', (req, res) => {
  Game.findById(req.params.gameId)
    .then(game => {
      let playerCards = [game.deck.pop(), game.deck.pop()];
      playerCards[0].hidden = false;
      playerCards[1].hidden = false;
      game.players[req.body.userId] = playerCards;
      game.markModified('players');
      game.save().then(game = res.json(game));
    })
})

//fetch a game
router.get('/:gameId', (req, res) => {
  Game.findById(req.params.gameId)
    .then((game) => res.json(game))
    .catch((err) => res.status(404).json({ noGameFound: 'No game found with that ID' }));
})

module.exports = router;