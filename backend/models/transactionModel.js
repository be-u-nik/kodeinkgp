const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  soldBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  boughtBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  price: Number,
  noOfStocks: Number,
  time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
