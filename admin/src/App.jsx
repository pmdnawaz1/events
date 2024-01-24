import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookedTickets from './components/BookedTickets';
import ValidateTicket from './components/ValidateTickets';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/booked-tickets">Booked Tickets</Link>
            </li>
            <li>
              <Link to="/validate-ticket">Validate Ticket</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/booked-tickets" element={<BookedTickets />} />
          <Route path="/validate-ticket" element={<ValidateTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
