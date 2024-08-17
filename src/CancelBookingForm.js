import React, { useState } from 'react';
import { cancelBooking } from './api';

const CancelBookingForm = () => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cancelBooking({ email, id });
      alert('Booking canceled!');
    } catch (error) {
      console.error('Canceling failed:', error);
      alert('Canceling failed');
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
      <button type="submit">Cancel Booking</button>
    </form>
  );
};

export default CancelBookingForm;
