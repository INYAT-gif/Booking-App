import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import BookingList from './BookingList';
import BookingForm from './BookingForm';
import CancelBookingForm from './CancelBookingForm';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Booking List</Link>
          </li>
          <li>
            <Link to="/book">Book a New Booking</Link>
          </li>
          <li>
            <Link to="/cancel">Cancel a Booking</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<BookingList />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/cancel" element={<CancelBookingForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;