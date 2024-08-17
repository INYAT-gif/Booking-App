// src/components/BookingForm.js

import React, { useState } from 'react';
import { book } from '../services/bookingService';

const BookingForm = () => {
  const [email, setEmail] = useState('');

  const handleBook = async () => {
    try {
      const response = await book({ email });
      alert('Booking successful with ID: ' + response.id);
    } catch (error) {
      alert('Booking failed: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleBook}>Book</button>
    </div>
  );
};

export default BookingForm;
