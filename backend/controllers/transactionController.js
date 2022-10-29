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
  const Stocks = await Stock.find();

  res.status(200).json(Stocks);
});

module.exports = { transactionHistory, orderBook };
