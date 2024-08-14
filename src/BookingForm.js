import React, { useState } from 'react';

const BookingForm = () => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TO DO: implement API call to book a slot
    // fetch('/api/v1/booking/book', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, id }),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  };

  return (
    <div>
      <h1>Book a Slot</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;