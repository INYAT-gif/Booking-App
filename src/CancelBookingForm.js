import React, { useState } from 'react';
import axios from 'axios';

const CancelBookingForm = () => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [cancellationStatus, setCancellationStatus] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/api/v1/booking/cancel`, { email, id })
      .then(response => {
        setCancellationStatus(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Cancel a Booking</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Booking ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <button type="submit">Cancel</button>
      </form>
      {cancellationStatus && (
        <p>Booking cancellation status: {cancellationStatus}</p>
      )}
    </div>
  );
};

export default CancelBookingForm;