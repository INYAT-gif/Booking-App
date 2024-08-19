import React, { useState } from "react";
import axios from "axios";

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [email, setEmail] = useState("");
  const baseUrl = "http://localhost:8080/api/v1/booking";

  const cancelBookingClickHandler = async () => {
    await axios
      .put(baseUrl + "/cancel", { id: bookingId, email })
      .then((response) => {
        console.log("Response: ", response);
        if (response.status === 200) {
          console.log("Cancellation successful.");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        if (error.response && error.response.status === 400) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <div className="container mt-5">
      <h1>Cancel Booking</h1>
      <div className="mb-3">
        <label htmlFor="bookingId" className="form-label">
          Booking ID:
        </label>
        <input
          type="text"
          className="form-control"
          id="bookingId"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-danger" onClick={cancelBookingClickHandler}>
        Cancel Booking
      </button>
    </div>
  );
};

export default CancelBooking;
