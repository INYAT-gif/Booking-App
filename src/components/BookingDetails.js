// src/components/BookingDetails.js

import React, { useState } from 'react';
import { getBookingDetails } from '../services/bookingService';

const BookingDetails = () => {
  const [id, setId] = useState('');
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await getBookingDetails(id);
      setDetails(response);
    } catch (error) {
      alert('Failed to fetch booking details: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Booking Details</h2>
      <input
        type="text"
        placeholder="Booking ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchDetails}>Fetch Details</button>
      {details && (
        <div>
          <h3>Details:</h3>
          <pre>{JSON.stringify(details, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;

