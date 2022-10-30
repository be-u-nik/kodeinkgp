const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  buySell: String,
  noOfStocks: Number,
  orderType: String,
  amount: {
    type: Number,
    default: -1,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

stockSchema.index({ amount: 1, date: 1 });
stockSchema.index({ amount: -1, date: 1 });

module.exports = mongoose.model('Stock', stockSchema);
