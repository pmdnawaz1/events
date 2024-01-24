import React, { useState } from 'react';
import axios from 'axios';

const ValidateTicket = () => {
  const [bookingId, setBookingId] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleValidateTicket = () => {
    // Send request to backend to validate ticket
    axios.post('http://localhost:3000/validate-ticket', { bookingId })
      .then(response => {
        setValidationResult(response.data.message);
      })
      .catch(error => {
        console.error('Error validating ticket:', error);
      });
  };

  return (
    <div>
      <h2>Validate Ticket</h2>
      <label>
        Booking ID:
        <input type="text" value={bookingId} onChange={(e) => setBookingId(e.target.value)} />
      </label>
      <button onClick={handleValidateTicket}>Validate</button>
      <p>{validationResult}</p>
    </div>
  );
};

export default ValidateTicket;
