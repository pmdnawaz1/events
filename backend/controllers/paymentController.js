
const Booking = require('../models/bookingModel');
const paytmService = require('../services/paytmService');
const notificationController = require('./notificationController');

module.exports = {
  initiatePayment: async (req, res) => {
    try {
      // Validate input and create a booking record in the database
      const { eventId, customerName, email } = req.body;
      const booking = await Booking.create({ eventId, customerName, email });

      // Initiate payment with Paytm
      const paymentParams = paytmService.initiatePayment(booking);

      // Send paymentParams to the client for redirection to Paytm gateway
      res.json(paymentParams);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

};
