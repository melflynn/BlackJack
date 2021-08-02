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

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });

  socket.on("join game", ({gameId, username}) => {
    socket.join(gameId);
    console.log(username + " joined game: " + gameId);
  })

  socket.on("leave game", ({gameId, username}) => {
    socket.leave(gameId);
    console.log(username + " left game: " + gameId);
  })
})

const port = process.env.PORT || 5000;

httpServer.listen(port, () => console.log(`Server is running on port ${port}`));