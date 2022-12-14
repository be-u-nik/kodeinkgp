const express = require('express');
const router = express.Router();
const {
  transactionHistory,
  orderBook,
} = require('../controllers/transactionController');
const { createStock } = require('../controllers/stockController');
const { getUsers } = require('../controllers/userController');
const { getNotif } = require('../controllers/notifController');

router.post('/stock', createStock);
router.get('/transactions', transactionHistory);
router.get('/orderBook', orderBook);
router.get('/users', getUsers);
router.get('/notifications', getNotif);

module.exports = router;
