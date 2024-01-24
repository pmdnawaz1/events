const checksum = require('checksum');
const config = require('../config/config');

const paytmService = {
  initiatePayment: (booking) => {
    const { eventId, customerName, email } = booking;
    
    // Set your Paytm credentials
    const paytmParams = {
      MID: 'your_merchant_id',
      WEBSITE: 'WEBSTAGING', // For testing purposes, replace with your actual website
      CHANNEL_ID: 'WEB',
      INDUSTRY_TYPE_ID: 'Retail',
      ORDER_ID: `ORDER_${Date.now()}`,
      CUST_ID: `CUST_${Date.now()}`,
      MOBILE_NO: 'customer_mobile_number', // Add customer's mobile number
      EMAIL: email,
      TXN_AMOUNT: '10.00', // Set the amount dynamically based on your requirements
      CALLBACK_URL: 'your_callback_url',
    };

    // Generate checksum
    const checksumHash = checksum.generateChecksum(paytmParams, 'your_merchant_key');
    paytmParams.CHECKSUMHASH = checksumHash;

    // Return the payment parameters
    return paytmParams;
  },
};

module.exports = paytmService;
