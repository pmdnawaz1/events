import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TicketForm = () => {
  const [ticketData, setTicketData] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    occupation: '',
    ticketNo: '',
    location: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/book-ticket', ticketData);
      console.log(response.data); 
      setTicketData({ name: '', gender: '', email: '', mobile: '', occupation: '', ticketNo: '', location: '' });
      if(response.status === 200) {
        alert("Ticket booked successfully");
      }
      navigate('/book-ticket');
    } catch (error) {
      console.error('Error adding ticket:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={ticketData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">
          Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={ticketData.mobile}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={ticketData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Gender" className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={ticketData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Occupation" className="block text-sm font-medium text-gray-600">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={ticketData.occupation}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Ticket No" className="block text-sm font-medium text-gray-600">
            Ticket No
          </label>
          <input
            type="text"
            id="ticketNo"
            name="ticketNo"
            value={ticketData.ticketNo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">
            Location Booked at
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={ticketData.location}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
       

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
