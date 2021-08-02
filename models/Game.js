const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  players: {
    type: Object, 
    required: true
  },
  currentPlayerId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  houseCards: {
    type: Array, 
    required: true
  },
  deck: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Game = mongoose.model('Game', GameSchema);