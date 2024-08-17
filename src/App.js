import React from 'react';
import BookingForm from './BookingForm';
import CancelBooking from './CancelBooking';
import BookingList from './BookingList';
import BookingDetails from './BookingDetails';

function App() {
    return (
        <div className="App">
            <h1>Booking System</h1>
            <BookingForm />
            <CancelBooking />
            <BookingList />
            <BookingDetails />
        </div>
    );
}

export default App;
