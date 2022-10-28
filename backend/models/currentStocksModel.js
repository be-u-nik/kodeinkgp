const mongoose = require('mongoose');
import { v4 as uuidv4 } from 'uuid';

const currentStocksSchema = mongoose.Schema({
  sellStocks: [
    {
      id: {
        type: 'string',
        default: uuidv4().toString(),
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      noOfStocks: Number,
      type: String,
      date: {
        type: Date,
        default: new Date(),
      },
    },
  ],
  buyStocks: [
    {
      id: {
        type: 'string',
        default: uuidv4().toString(),
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      noOfStocks: Number,
      type: String,
      date: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

module.exports = mongoose.model('CurrentStocks', currentStocksSchema);
