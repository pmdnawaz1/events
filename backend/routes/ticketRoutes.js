const ticketController  = require('../controllers/ticketController');
const express = require('express');
const router = express.Router();

router.post('/book-ticket', ticketController.bookTickets);
router.get('/get-tickets', ticketController.getAllTickets);
module.exports = router;