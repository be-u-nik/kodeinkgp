const mongoose = require('mongoose');

const User = require('./userModel');
const Notif = require('./notifModel');

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

transactionSchema.post('save', async function () {
  let seller = await User.findById(soldBy),
    buyer = await User.findById(boughtBy);
  seller.fiat += price * noOfStocks;
  seller.stocksOwned -= noOfStocks;
  buyer.fiat -= price * noOfStocks;
  buyer.stocksOwned += noOfStocks;
  Notif.create({
    message: `${noOfStocks} stocks from ${seller.name} transferred to ${buyer.name} at price ${price}$`,
  });
  await seller.save();
  await buyer.save();
});

module.exports = mongoose.model('Transaction', transactionSchema);
