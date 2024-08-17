// src/components/BookingList.js

import React, { useState } from 'react';
import { getBookingsBetweenDates } from '../services/bookingService';

const BookingList = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await getBookingsBetweenDates(from, to);
      setBookings(response);
    } catch (error) {
      alert('Failed to fetch bookings: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Booking List</h2>
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={fetchBookings}>Fetch Bookings</button>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.id} - {booking.dateTime} - {booking.booked ? 'Booked' : 'Cancelled'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;

