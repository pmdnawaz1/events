const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  customerName: String,
  email: String,
  // Add more fields as needed
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
