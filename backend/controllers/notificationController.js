const twilioService = require('../services/twilioService');
const emailService = require('../services/emailService');

module.exports = {
  sendWhatsAppMessage: async (booking) => {
    try {
      // Use Twilio to send WhatsApp message
      await twilioService.sendWhatsAppMessage(booking);
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    }
  },
  sendEmail: async (booking) => {
    try {
      // Use NodeMailer to send email
      await emailService.sendEmail(booking);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  },
};
