import React, { useEffect, useState } from 'react';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/bookings')
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.date} - {booking.time} (ID: {booking.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
