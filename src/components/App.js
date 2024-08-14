import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import BookingList from '../BookingList';
import BookingForm from '../BookingForm';
import CancelBookingForm from '../CancelBookingForm';
import './App.css';
import AxiosDemo from './AxiosDemo';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Booking List</Link>
            </li>
            <li>
              <Link to="/book">Book a Slot</Link>
            </li>
            <li>
              <Link to="/cancel">Cancel Booking</Link>
            </li>
            <li>
              <Link to="/axios-demo">Axios Demo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<BookingList />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/cancel" element={<CancelBookingForm />} />
          <Route path="/axios-demo" element={<AxiosDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;