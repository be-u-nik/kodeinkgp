const express = require('express');
const router = express.Router();
const {
  transactionHistory,
  orderBook,
} = require('../controllers/transactionController');
const { createStock } = require('../controllers/stockController');

router.post('/stock', createStock);
router.get('/transactions', transactionHistory);
router.get('/orderBook', orderBook);

module.exports = router;
