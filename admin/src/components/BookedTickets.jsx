import React,{ useState, useEffect } from 'react';

const BookedTickets = () => {
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    const fetchBookedTickets = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/get-tickets');
        const data = await response.json();
        setBookedTickets(data);
      }
      catch (error) {
        console.error('Error fetching booked tickets:', error);
      }
    }
    fetchBookedTickets();
  } , []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Mobile
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Occupation
            </th>
            <th scope="col" className="px-6 py-3">
              Ticket NO.
            </th>
            <th scope="col" className="px-6 py-3">
              Location Booked at
            </th>

          </tr>
        </thead>
        <tbody>
          {bookedTickets.map((ticket, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'even' : 'odd'}:bg-white ${index % 2 === 0 ? 'even' : 'odd'}:`}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ticket.name}</td>
              <td className="px-6 py-4">{ticket.mobile}</td>
              <td className="px-6 py-4">{ticket.email}</td>
              <td className="px-6 py-4">{ticket.gender}</td>
              <td className="px-6 py-4">{ticket.occupation}</td>
              <td className="px-6 py-4">{ticket.ticketNo}</td>
              <td className="px-6 py-4">{ticket.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedTickets;
