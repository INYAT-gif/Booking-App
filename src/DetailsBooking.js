import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailsBooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/booking/details/${id}`
        );
        if (response.status === 200) {
          setBooking(response.data);
        }
      } catch (error) {
        console.error("Error fetching booking details: ", error);
      }
    };
    fetchBookingDetails();
  }, [id]);

  return (
    <div>
      <h3>Details</h3>
      {booking ? (
        <div className="card">
          <div className="card-body">
            <p>Booking ID: {booking.id}</p>
            <p>DateTime: {booking.dateTime}</p>
            <p>Booked: {booking.booked ? "Yes" : "No"}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsBooking;
