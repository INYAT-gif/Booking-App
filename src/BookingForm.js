import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [booking, setBooking] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/v1/booking/book`, { email, id })
      .then(response => {
        setBooking(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Book a New Booking</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Booking ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <button type="submit">Book</button>
      </form>
      {booking && (
        <p>Booking successful! Booking ID: {booking.id}</p>
      )}
    </div>
  );
};

export default BookingForm;