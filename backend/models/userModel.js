const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  fiat: {
    type: 'number',
    default: 0,
  },
  stocksOwned: {
    type: 'number',
    default: 0,
  },
  stocks: [String],
});

module.exports = mongoose.model('User', userSchema);
