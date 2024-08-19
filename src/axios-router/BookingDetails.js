import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookingDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const baseUrl = "http://localhost:8080/api/v1/booking";

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/details/${id}`);
        if (response.status === 200) {
          setBooking(response.data);
        }
      } catch (error) {
        console.log("Error fetching booking details: ", error);
      }
    };

    fetchBookingDetails();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h3>Booking Details</h3>
      <p>ID: {booking.id}</p>
      <p>DateTime: {booking.dateTime}</p>
      <p>Booked: {booking.booked ? "Yes" : "No"}</p>
    </div>
  );
};

export default BookingDetails;
