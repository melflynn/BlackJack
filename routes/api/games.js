const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

router.post('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newGame = new Game({
      players: [req.body.user]
    })

    newGame.save()
      .then(game => res.json(game));
  }
})