import React, { useState } from 'react';
import { book } from './api';

const BookingForm = () => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await book({ email, id });
      alert('Booking successful!');
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input value={id} onChange={(e) => setId(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
