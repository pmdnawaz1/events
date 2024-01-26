const Ticket = require('../models/Ticket');

const bookTickets = async (req, res) => {
	const { name, gender, email, mobile, occupation, ticketNo, location } =
		req.body;
	const config = {
		name,
		gender,
		email,
		mobile,
		occupation,
		ticketNo,
		location,
	};
	try {
		const savedTicket = await Ticket.create(config);
		res.status(200);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
		throw error;
	}
};

const getAllTickets = async (req, res) => {
	try {
		const tickets = await Ticket.find();
		res.status(200).json(tickets);
	} catch (error) {
		console.log(error);

		res.status(500).json(error);
	}
};

module.exports = { bookTickets, getAllTickets };
