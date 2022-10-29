const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Transaction = require('../models/transactionModel');
const Stock = require('../models/stockModel');

const transactionHistory = asyncHandler(async (req, res) => {
  const transactionsWithId = await Transaction.find();
  let transactions = [];
  for (let i = 0; i < transactionsWithId.length; i++) {
    const sold = await User.findById(transactionsWithId[i].soldBy);
    const bought = await User.findById(transactionsWithId[i].boughtBy);
    let transaction = {
      soldBy: sold,
      boughtBy: bought,
      price: transactionsWithId[i].price,
      noOfStocks: transactionsWithId[i].noOfStocks,
      time: transactionsWithId[i].time,
    };
    transactions.push(transaction);
  }

  res.status(200).json(transactions);
});

const orderBook = asyncHandler(async (req, res) => {
  const buyStocks = await Stock.find({ buySell: 'buy' });
  const sellStocks = await Stock.find({ buySell: 'sell' });

  res.status(200).json({ buy: buyStocks, sell: sellStocks });
});

module.exports = { transactionHistory, orderBook };
