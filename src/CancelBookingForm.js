import React, { useState } from 'react';

function CancelBookingForm() {
  const [email, setEmail] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/cancel/${bookingId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => setMessage(data.message));
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="text"
          value={bookingId}
          onChange={e => setBookingId(e.target.value)}
          placeholder="Enter booking ID"
          required
        />
        <button type="submit">Cancel Booking</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CancelBookingForm;
