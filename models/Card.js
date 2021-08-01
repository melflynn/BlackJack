const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  value: {
    type: String, 
    required: true
  },
  suit: {
    type: String,
    required: true
  },
  hidden: {
    type: Boolean,
    required: true
  },
  timestamps: true
})

module.exports = Card = mongoose.mode('Card', CardSchema);