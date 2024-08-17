import React, { useState } from 'react';
import bookingService from './services/bookingService';

function Booking() {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    const handleBook = () => {
        bookingService.book({ id, email })
            .then(response => alert('Booking successful'))
            .catch(error => alert('Error booking'));
    };

    return (
        <div>
            <h2>Book a Room</h2>
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
            <button onClick={handleBook}>Book</button>
        </div>
    );
}

export default Booking;
