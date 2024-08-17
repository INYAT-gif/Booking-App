// src/App.js

import React from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import BookingDetails from './components/BookingDetails';

const App = () => {
  return (
    <div className="App">
      <h1>Booking App</h1>
      <BookingForm />
      <hr />
      <BookingList />
      <hr />
      <BookingDetails />
    </div>
  );
};

export default App;

