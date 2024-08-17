import React, { useState } from 'react';
import bookingService from './services/bookingService';

function BookingDetails() {
    const [id, setId] = useState('');
    const [details, setDetails] = useState(null);

    const handleView = () => {
        bookingService.getBookingDetails(id)
            .then(response => setDetails(response.data))
            .catch(error => alert('Error fetching booking details'));
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
            <button onClick={handleView}>View</button>
            {details && (
                <div>
                    <p>ID: {details.id}</p>
                    <p>Date: {details.dateTime}</p>
                    <p>Booked: {details.booked ? "Yes" : "No"}</p>
                </div>
            )}
        </div>
    );
}

export default BookingDetails;
