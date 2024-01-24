const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider', // Replace with your email service provider (e.g., 'gmail')
  auth: {
    user: process.env.EMAIL_USER || config.emailUser,
    pass: process.env.EMAIL_PASSWORD || config.emailPassword,
  },
});

const emailService = {
  sendEmail: async (booking) => {
    const { customerName, email } = booking;

    // Set your email content and subject
    const mailOptions = {
      from: 'your_email@example.com', // Replace with your email
      to: email,
      subject: 'Ticket Booking Confirmation',
      text: `Dear ${customerName},\n\nYour ticket booking is confirmed. Thank you for choosing our service.`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
  },
};

module.exports = emailService;
