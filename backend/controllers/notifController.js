const asyncHandler = require('express-async-handler');

const Notif = require('../models/notifModel');

const getNotif = asyncHandler(async (req, res) => {
  const notifications = await Notif.find();

  res.status(200).json(notifications);
});

module.exports = { getNotif };
