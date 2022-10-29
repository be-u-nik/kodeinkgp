const asyncHandler = require('express-async-handler');
import { v4 as uuidv4 } from 'uuid';

const User = require('../models/userModel');
const CurrentStocks = require('../models/currentStocksModel');
const DoneStocks = require('../models/doneStocksModel');
const Transaction = require('../models/transactionModel');

const createStock = asyncHandler(async (req, res, next) => {
  const { userId, buySell, orderType, amountOfStocks, price } = req.body;

  if (
    !userId ||
    !buySell ||
    !orderType ||
    !amountOfStocks ||
    (orderType == 'limit' && (price === undefined || !price))
  ) {
    throw new Error('Fill all fields');
  }

  const User = await User.findById(userId);
  if (!User) {
    throw new Error('No user exists');
  }

  const stock = {
    id: uuidv4().toString(),
    userId,
    noOfStocks: amountOfStocks,
    orderType,
    date: new Date.now(),
    buySell,
  };

  next();
});

module.exports = { createStock };
