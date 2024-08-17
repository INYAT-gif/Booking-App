import React, { useState } from 'react';
import { getBookingDetails } from './api';

const BookingDetails = () => {
  const [id, setId] = useState('');
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await getBookingDetails(id);
      setDetails(response.data);
    } catch (error) {
      console.error('Fetching details failed:', error);
      alert('Fetching details failed');
    }
  };

  return (
    <div>
      <div>
        <label>ID:</label>
        <input value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <button onClick={fetchDetails}>Get Booking Details</button>
      {details && (
        <div>
          <h3>Booking Details</h3>
          <p>ID: {details.id}</p>
          <p>DateTime: {details.dateTime}</p>
          <p>Booked: {details.booked ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
