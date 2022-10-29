const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = { getUsers };
