const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

let cards = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'A']
let suits = ['S', 'D', 'H', 'C']
let deck = []
suits.forEach((suit) => {
  cards.forEach((card) => {
    deck.push(card + suit)
  })
})


router.post('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newGame = new Game({
      players: [req.body.user],
      //need to shuffle
      // deck: deck.shuffle();
    })

    newGame.save()
      .then(game => res.json(game));
  }
})