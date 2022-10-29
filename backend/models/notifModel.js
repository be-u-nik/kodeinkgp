const mongoose = require('mongoose');

const notifSchema = mongoose.Schema({
  message: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Notif', notifSchema);
