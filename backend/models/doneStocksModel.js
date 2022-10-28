const mongoose = require('mongoose');
import { v4 as uuidv4 } from 'uuid';

const doneStocksSchema = mongoose.Schema({
  id: {
    type: 'string',
    default: uuidv4().toString(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  buySell: String,
  noOfStocks: Number,
  type: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('DoneStocks', doneStocksSchema);
