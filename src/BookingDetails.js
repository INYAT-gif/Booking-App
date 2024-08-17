import React, { useState } from 'react';
import { getBookingDetails } from './apiService';

function BookingDetails() {
    const [id, setId] = useState('');
    const [details, setDetails] = useState(null);

    const handleFetch = async () => {
        try {
            const response = await getBookingDetails(id);
            setDetails(response.data);
        } catch (error) {
            alert('Failed to fetch booking details!');
        }
    };

    return (
        <div>
            <div>
                <label>Booking ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
            </div>
            <button onClick={handleFetch}>Fetch Details</button>
            {details && (
                <div>
                    <p>ID: {details.id}</p>
                    <p>Date: {details.dateTime}</p>
                    <p>Status: {details.booked ? 'Booked' : 'Not Booked'}</p>
                </div>
            )}
        </div>
    );
}

export default BookingDetails;
