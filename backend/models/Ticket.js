const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: String,
  gender: String,
  occupation: String,
  ticketNo: String,
  location: String,
  email: String,
  phone: String,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;