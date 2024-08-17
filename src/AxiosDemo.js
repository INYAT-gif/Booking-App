import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AxiosDemo = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const baseUrl = "http://localhost:8080";

  const getBookingsClickHandler = async () => {
    try {
      const response = await axios.get(
        baseUrl + "/api/v1/booking/from/2024-08-13/to/2024-08-15"
      );
      if (response.status === 200) {
        setBookings(response.data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const bookBookingClickHandler = async (id, email) => {
    try {
      const response = await axios.post(baseUrl + "/api/v1/booking/book", {
        id,
        email,
      });
      if (response.status === 200) {
        getBookingsClickHandler();
      }
    } catch (error) {
      console.error("Error booking slot:", error);
    }
  };

  const cancelBookingClickHandler = async (id, email) => {
    try {
      const response = await axios.put(baseUrl + "/api/v1/booking/cancel", {
        id,
        email,
      });
      if (response.status === 200) {
        getBookingsClickHandler();
      }
    } catch (error) {
      console.error("Error canceling booking:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-info"
            type="button"
            onClick={getBookingsClickHandler}
          >
            Get Bookings
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {bookings && bookings.length !== 0 && (
            <h2 className="mb-4">Bookings List</h2>
          )}
          <div className="row">
            {bookings.map((booking) => (
              <div key={booking.id} className="card mb-4 col-md-3">
                <div className="card-body">
                  <h5 className="card-title">{booking.dateTime}</h5>
                  <button
                    className="btn btn-info"
                    onClick={() => navigate("/details/" + booking.id)}
                  >
                    Details
                  </button>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() =>
                      cancelBookingClickHandler(
                        booking.id,
                        "inyat.nathani@gmail.com"
                      )
                    }
                  >
                    Cancel
                  </button>
                </div>
                <div className="d-grid card-footer">
                  <button
                    type="button"
                    className={`btn btn-${
                      booking.booked ? "danger" : "success"
                    }`}
                    onClick={() =>
                      bookBookingClickHandler(
                        booking.id,
                        "inyat.nathani@gmail.com"
                      )
                    }
                    disabled={booking.booked}
                  >
                    {booking.booked ? "Booked" : "Available"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiosDemo;
