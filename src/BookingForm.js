import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/book', { email })
      .then(() => navigate('/'))
      .catch(error => console.error('Error booking:', error));
  };

  return (
    <div>
      <h2>Book a Slot</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
