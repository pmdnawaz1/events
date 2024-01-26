const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// const eventRoutes = require('./routes/eventRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');
// const notificationRoutes = require('./routes/notificationRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
// app.use('/events', eventRoutes);
// app.use('/payments', paymentRoutes);
// app.use('/notifications', notificationRoutes);
app.use('/api', ticketRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
