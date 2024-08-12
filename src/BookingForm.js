import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Book a Slot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
