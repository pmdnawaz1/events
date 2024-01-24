const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Add routes for sending notifications
router.post('/send-whatsapp-message', async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId);
    await notificationController.sendWhatsAppMessage(booking);
    res.json({ message: 'WhatsApp message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/send-email', async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId);
    await notificationController.sendEmail(booking);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
