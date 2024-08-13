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
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => navigate('/'))
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to book a slot. Please try again later.');
    });
  };

  return (
    <div>
      <h2>Book a Slot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email" // Added id attribute
          name="email" // Added name attribute
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
