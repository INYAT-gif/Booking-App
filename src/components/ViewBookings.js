import React, { useState } from 'react';
import bookingService from './services/bookingService';

function ViewBookings() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [bookings, setBookings] = useState([]);

    const handleView = () => {
        bookingService.getAllBookingsBetweenDates(from, to)
            .then(response => setBookings(response.data))
            .catch(error => alert('Error fetching bookings'));
    };

    return (
        <div>
            <h2>View Bookings</h2>
            <input 
                type="date" 
                value={from} 
                onChange={(e) => setFrom(e.target.value)} 
            />
            <input 
                type="date" 
                value={to} 
                onChange={(e) => setTo(e.target.value)} 
            />
            <button onClick={handleView}>View</button>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.id} - {booking.dateTime} - {booking.booked ? "Booked" : "Not Booked"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewBookings;
