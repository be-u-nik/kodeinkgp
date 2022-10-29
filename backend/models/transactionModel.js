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
  let seller = await User.findById(this.soldBy),
    buyer = await User.findById(this.boughtBy);
  seller.fiat += this.price * this.noOfStocks;
  seller.stocksOwned -= this.noOfStocks;
  buyer.fiat -= this.price * this.noOfStocks;
  buyer.stocksOwned += this.noOfStocks;
  Notif.create({
    message: `${this.noOfStocks} stocks from ${seller.name} transferred to ${buyer.name} at price ${this.price}$`,
  });
  await seller.save();
  await buyer.save();
});

module.exports = mongoose.model('Transaction', transactionSchema);
