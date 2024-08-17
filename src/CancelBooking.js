import React, { useState } from 'react';
import { cancelBooking } from './apiService';

function CancelBooking() {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    const handleCancel = async (e) => {
        e.preventDefault();
        try {
            await cancelBooking({ email, id });
            alert('Booking canceled successfully!');
        } catch (error) {
            alert('Cancellation failed!');
        }
    };

    return (
        <form onSubmit={handleCancel}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Booking ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
            </div>
            <button type="submit">Cancel Booking</button>
        </form>
    );
}

export default CancelBooking;
