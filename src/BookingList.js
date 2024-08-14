import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/booking/from/${from}/to/${to}`)
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [from, to]);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  return (
    <div>
      <h1>Booking List</h1>
      <form>
        <label>
          From:
          <input type="date" value={from} onChange={handleFromChange} />
        </label>
        <label>
          To:
          <input type="date" value={to} onChange={handleToChange} />
        </label>
      </form>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.dateTime} - {booking.booked ? 'Booked' : 'Available'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;