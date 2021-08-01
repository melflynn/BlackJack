const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');


const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let cardValues = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'A']
let cardSuits = ['S', 'D', 'H', 'C']
let deck = []
cardSuits.forEach((suit) => {
  cardValues.forEach((value) => {
    let card = new Card({
      value,
      suit,
      hidden: true
    });
    deck.push(card);
  });
});
shuffleDeck(deck);


router.post('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newGame = new Game({
      players: [req.body.user],
      //need to shuffle
      // deck: deck.shuffle();
    })

    newGame.save()
      .then(game => res.json([]));
  }
})

router.get('/:gameId', (req, res) => {
  Game.findById(req.params.gameId)
    .then((game) => res.json(game))
    .catch((err) => res.status(404).json({ noGameFound: 'No game found with that ID' }));
})