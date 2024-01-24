const Event = require('../models/eventModel');

module.exports = {
  getAllEvents: async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};