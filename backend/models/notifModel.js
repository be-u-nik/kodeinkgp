const mongoose = require('mongoose');

const notifSchema = mongoose.Schema({
  message: String,
  date: {
    type: Date,
    default: new Date.now(),
  },
});

module.exports = mongoose.model('Notif', notifSchema);
