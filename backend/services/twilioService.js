const twilio = require('twilio');
const config = require('../config/config');

const twilioClient = twilio(config.twilioAccountSid, config.twilioAuthToken);

const twilioService = {
  sendWhatsAppMessage: async (booking) => {
    try {
      const { customerName, email } = booking;

      // Set your Twilio WhatsApp message content and recipient
      const message = await twilioClient.messages.create({
        from: `whatsapp:${config.twilioPhoneNumber}`,
        body: `Dear ${customerName},\nYour ticket booking is confirmed. Thank you for choosing our service.`,
        to: `whatsapp:${customer_mobile_number}`, // Add customer's mobile number
      });

      console.log('WhatsApp message sent:', message.sid);
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    }
  },
};

module.exports = twilioService;
