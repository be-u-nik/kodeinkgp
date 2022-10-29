const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Stock = require('../models/stockModel');
const Transaction = require('../models/transactionModel');
const Notif = require('../models/notifModel');

const createStock = asyncHandler(async (req, res) => {
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

  const userCheck = await User.findById(userId);
  if (!userCheck) {
    throw new Error('No user exists');
  }

  if (orderType == 'limit') {
    if (buySell === 'buy') {
      const stocks = await Stock.find({
        buySell: 'sell',
        $or: [{ amount: -1 }, { amount: price }],
      });
      let num = amountOfStocks;
      for (let i = 0; i < stocks.length && num > 0; i++) {
        if (stocks[i].noOfStocks == num) {
          let transaction = {
            soldBy: stocks[i].user,
            boughtBy: userId,
            price: price,
            noOfStocks: num,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
          num = 0;
          break;
        } else if (stocks[i].noOfStocks > num) {
          let transaction = {
              soldBy: stocks[i].user,
              boughtBy: userId,
              price: price,
              noOfStocks: num,
            },
            currStocks = stocks[i].noOfStocks - num;
          await Transaction.create(transaction);
          await Stock.findByIdAndUpdate(stocks[i]._id, {
            noOfStocks: currStocks,
          });
          num = 0;
          break;
        } else {
          num -= stocks[i].noOfStocks;
          let transaction = {
            soldBy: stocks[i].user,
            boughtBy: userId,
            price: price,
            noOfStocks: stocks[i].noOfStocks,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
        }
      }
      if (num > 0) {
        await Stock.create({
          user: userId,
          buySell,
          noOfStocks: num,
          orderType,
          amount: price,
        });
      }
    } else {
      const stocks = await Stock.find({
        buySell: 'buy',
        $or: [{ amount: -1 }, { amount: price }],
      });
      let num = amountOfStocks;
      for (let i = 0; i < stocks.length && num > 0; i++) {
        if (stocks[i].noOfStocks == num) {
          let transaction = {
            boughtBy: stocks[i].user,
            soldBy: userId,
            price: price,
            noOfStocks: num,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
          num = 0;
          break;
        } else if (stocks[i].noOfStocks > num) {
          let transaction = {
              boughtBy: stocks[i].user,
              soldBy: userId,
              price: price,
              noOfStocks: num,
            },
            currStocks = stocks[i].noOfStocks - num;
          await Transaction.create(transaction);
          await Stock.findByIdAndUpdate(stocks[i]._id, {
            noOfStocks: currStocks,
          });
          num = 0;
          break;
        } else {
          num -= stocks[i].noOfStocks;
          let transaction = {
            boughtBy: stocks[i].user,
            soldBy: userId,
            price: price,
            noOfStocks: stocks[i].noOfStocks,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
        }
      }
      if (num > 0) {
        await Stock.create({
          user: userId,
          buySell,
          noOfStocks: num,
          orderType,
          amount: price,
        });
      }
    }
  } else {
    const transactions = await Transaction.find();
    let marketCap = transactions[transactions.length - 1].price;
    if (buySell === 'buy') {
      const stocks = await Stock.find({
        buySell: 'sell',
      });
      let num = amountOfStocks;
      for (let i = 0; i < stocks.length && num > 0; i++) {
        if (stocks[i].noOfStocks == num) {
          let transaction = {
            soldBy: stocks[i].user,
            boughtBy: userId,
            price:
              stocks[i].orderType === 'market' ? marketCap : stocks[i].amount,
            noOfStocks: num,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
          marketCap = transaction.price;
          num = 0;
          break;
        } else if (stocks[i].noOfStocks > num) {
          let transaction = {
              soldBy: stocks[i].user,
              boughtBy: userId,
              price:
                stocks[i].orderType === 'market' ? marketCap : stocks[i].amount,
              noOfStocks: num,
            },
            currStocks = stocks[i].noOfStocks - num;
          await Transaction.create(transaction);
          await Stock.findByIdAndUpdate(stocks[i]._id, {
            noOfStocks: currStocks,
          });
          marketCap = transaction.price;
          num = 0;
          break;
        } else {
          num -= stocks[i].noOfStocks;
          let transaction = {
            soldBy: stocks[i].user,
            boughtBy: userId,
            price:
              stocks[i].orderType === 'market' ? marketCap : stocks[i].amount,
            noOfStocks: stocks[i].noOfStocks,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
        }
      }
      if (num > 0) {
        await Stock.create({
          user: userId,
          buySell,
          noOfStocks: num,
          orderType,
        });
      }
    } else {
      const stocks = await Stock.find({
        buySell: 'buy',
      });
      let num = amountOfStocks;
      for (let i = 0; i < stocks.length && num > 0; i++) {
        if (stocks[i].noOfStocks == num) {
          let transaction = {
            boughtBy: stocks[i].user,
            soldBy: userId,
            price:
              stocks[i].orderType === 'market' ? marketCap : stocks[i].amount,
            noOfStocks: num,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
          marketCap = transaction.price;
          num = 0;
          break;
        } else if (stocks[i].noOfStocks > num) {
          let transaction = {
              boughtBy: stocks[i].user,
              soldBy: userId,
              price:
                stocks[i].orderType === 'market' ? marketCap : stocks[i].amount,
              noOfStocks: num,
            },
            currStocks = stocks[i].noOfStocks - num;
          await Transaction.create(transaction);
          await Stock.findByIdAndUpdate(stocks[i]._id, {
            noOfStocks: currStocks,
          });
          marketCap = transaction.price;
          num = 0;
          break;
        } else {
          num -= stocks[i].noOfStocks;
          let transaction = {
            boughtBy: stocks[i].user,
            soldBy: userId,
            price:
              stocks[i].orderType === 'market' ? marketCap : stocks[i].amount,
            noOfStocks: stocks[i].noOfStocks,
          };
          await Transaction.create(transaction);
          await Stock.findByIdAndDelete(stocks[i]._id);
        }
      }
      if (num > 0) {
        await Stock.create({
          user: userId,
          buySell,
          noOfStocks: num,
          orderType,
        });
      }
    }
  }

  res.status(200).json(null);
});

module.exports = { createStock };
