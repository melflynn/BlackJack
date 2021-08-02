const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  value: {
    type: String,
    required: true
  },
  hidden: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Card = mongoose.model('Card', CardSchema);