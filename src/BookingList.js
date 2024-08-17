import React, { useState } from 'react';
import { getBookingsBetweenDates } from './apiService';

function BookingList() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [bookings, setBookings] = useState([]);

    const handleFetch = async () => {
        try {
            const response = await getBookingsBetweenDates(from, to);
            setBookings(response.data);
        } catch (error) {
            alert('Failed to fetch bookings!');
        }
    };

    return (
        <div>
            <div>
                <label>From Date:</label>
                <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} required />
            </div>
            <div>
                <label>To Date:</label>
                <input type="date" value={to} onChange={(e) => setTo(e.target.value)} required />
            </div>
            <button onClick={handleFetch}>Fetch Bookings</button>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {booking.id} - {booking.dateTime} - {booking.booked ? 'Booked' : 'Not Booked'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingList;
