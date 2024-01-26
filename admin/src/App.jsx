import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookedTickets from './components/BookedTickets';
import ValidateTicket from './components/ValidateTickets';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/booked-tickets">Booked Tickets</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/booked-tickets" element={<BookedTickets />} />
          <Route path="/validate-ticket" element={<ValidateTicket />} />
          <Route path="/book-ticket" element={<TicketForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
