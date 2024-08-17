import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Booking from './Booking';
import CancelBooking from './CancelBooking';
import ViewBookings from './ViewBookings';
import BookingDetails from './BookingDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/book">Book</Link></li>
            <li><Link to="/cancel">Cancel Booking</Link></li>
            <li><Link to="/view">View Bookings</Link></li>
            <li><Link to="/details">Booking Details</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/book" element={<Booking />} />
          <Route path="/cancel" element={<CancelBooking />} />
          <Route path="/view" element={<ViewBookings />} />
          <Route path="/details" element={<BookingDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
