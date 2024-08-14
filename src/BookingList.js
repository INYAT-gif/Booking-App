import React, { useState, useEffect } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    // TO DO: implement API call to fetch bookings
    // fetch('/api/v1/booking/from/{from}/to/{to}')
    //   .then(response => response.json())
    //   .then(data => setBookings(data));
  }, [from, to]);

  const handleFromDateChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToDateChange = (event) => {
    setTo(event.target.value);
  };

  return (
    <div>
      <h1>Booking List</h1>
      <form>
        <label>
          From:
          <input type="date" value={from} onChange={handleFromDateChange} />
        </label>
        <label>
          To:
          <input type="date" value={to} onChange={handleToDateChange} />
        </label>
      </form>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.dateTime}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;