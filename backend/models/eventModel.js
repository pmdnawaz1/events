const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  // Add more fields as needed
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;