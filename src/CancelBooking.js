import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CancelBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cancelBookingHandler = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/booking/cancel",
        { id, email: "user@example.com" } // Replace with appropriate email if needed
      );
      if (response.status === 200) {
        console.log("Booking cancelled successfully.");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error canceling booking: ", error);
    }
  };

  return (
    <div>
      <h3>Cancel Booking</h3>
      <p>Are you sure you want to cancel the booking with ID: {id}?</p>
      <button className="btn btn-danger" onClick={cancelBookingHandler}>
        Confirm Cancel
      </button>
    </div>
  );
};

export default CancelBooking;
