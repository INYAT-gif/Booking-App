import React, { useState } from 'react';
import { book } from './apiService';

function BookingForm() {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await book({ email, id });
            alert('Booking successful!');
        } catch (error) {
            alert('Booking failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Booking ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
            </div>
            <button type="submit">Book</button>
        </form>
    );
}

export default BookingForm;
