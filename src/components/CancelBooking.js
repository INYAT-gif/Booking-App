import React, { useState } from 'react';
import bookingService from './services/bookingService';

function CancelBooking() {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const handleCancel = () => {
        bookingService.cancelBooking({ id, email })
            .then(response => alert('Booking cancelled'))
            .catch(error => alert('Error cancelling booking'));
    };

    return (
        <div>
            <h2>Cancel Booking</h2>
            <input 
                type="text" 
                placeholder="Booking ID" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default CancelBooking;
