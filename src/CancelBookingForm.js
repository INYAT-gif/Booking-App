import React, { useState } from 'react';
import axios from 'axios';

function CancelBookingForm() {
  const [email, setEmail] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8080/api/cancel/${bookingId}`, { data: { email } })
      .then(response => setMessage('Booking cancelled successfully!'))
      .catch(error => setMessage('Error cancelling booking.'));
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Enter booking ID" 
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          required 
        />
        <button type="submit">Cancel Booking</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CancelBookingForm;
