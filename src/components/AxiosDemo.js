import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AxiosDemo = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const baseUrl = "http://localhost:8080";

  const getBookingsClickHandler = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/booking/from/2024-08-13/to/2024-08-15`);
      if (response.status === 200) {
        console.log("Data ", response.data);
        setBookings(response.data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const bookBookingClickHandler = async (id, email) => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/booking/book`, { id, email });
      if (response.status === 201) {
        console.log("Booking successful.");
        getBookingsClickHandler();
      }
    } catch (error) {
      console.error("Error booking:", error);
      if (error.response && error.response.status === 400) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="container">
      <button className="btn btn-info" type="button" onClick={getBookingsClickHandler}>
        Get Bookings
      </button>
      
      {bookings.length > 0 && (
        <div className="mt-5">
          <h2 className="mb-4">Bookings List</h2>
          <div className="row">
            {bookings.map((booking) => (
              <div key={booking.id} className="col-md-3 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{booking.dateTime}</h5>
                    <button
                      className="btn btn-info mb-2"
                      onClick={() => navigate(`/details/${booking.id}`)}
                    >
                      Details
                    </button>
                  </div>
                  <div className="card-footer">
                    <button
                      type="button"
                      className={`btn btn-${booking.booked ? "danger" : "success"} w-100`}
                      onClick={() => bookBookingClickHandler(booking.id, "inyat.nathani@gmail.com")}
                      disabled={booking.booked}
                    >
                      {booking.booked ? "Booked" : "Available"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AxiosDemo;