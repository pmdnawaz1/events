import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookedTickets = () => {
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/bookings')
      .then(response => {
        setBookedTickets(response.data);
      })
      .catch(error => {
        console.error('Error fetching booked tickets:', error);
      });
  }, []);

  return (
    <div>
      <h2>Booked Tickets</h2>
      <ul>
        {bookedTickets.map(ticket => (
          <li key={ticket._id}>
            <strong>{ticket.customerName}</strong> - {ticket.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedTickets;
