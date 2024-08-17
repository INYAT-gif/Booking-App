import React from 'react';
import BookingForm from './BookingForm';
import CancelBookingForm from './CancelBookingForm';
import BookingsList from './BookingsList';
import BookingDetails from './BookingDetails';

function App() {
  return (
    <div>
      <h1>Booking App</h1>
      <BookingForm />
      <CancelBookingForm />
      <BookingsList />
      <BookingDetails />
    </div>
  );
}

export default App;
