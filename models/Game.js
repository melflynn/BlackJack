const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  players: {
    type: Array, 
    required: true
  },
  timestamps: true
})

module.exports = Game = mongoose.mode('Game', GameSchema);