import React, { useState } from 'react';
import { getBookingsBetweenDates } from './api';

const BookingsList = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await getBookingsBetweenDates(from, to);
      setBookings(response.data);
    } catch (error) {
      console.error('Fetching bookings failed:', error);
      alert('Fetching bookings failed');
    }
  };

  return (
    <div>
      <div>
        <label>From:</label>
        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div>
        <label>To:</label>
        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <button onClick={fetchBookings}>Get Bookings</button>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.id} - {booking.dateTime} - {booking.booked ? 'Booked' : 'Not Booked'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
