const mongoose = require('mongoose');
import { v4 as uuidv4 } from 'uuid';

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
    default: new Date(),
  },
});

module.exports = mongoose.model('Stock', stockSchema);