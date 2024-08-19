import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import AxiosDemo from "./AxiosDemo";
import Header from "./axios-router/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<AxiosDemo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cancel" element={<CancelBooking />} />
        <Route path="/details/:id" element={<DetailsBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const About = () => <h1>About Component</h1>;

const CancelBooking = () => (
  <div className="container mt-5">
    <h2>Cancel Booking</h2>
    <div className="mb-3">
      <label htmlFor="bookingId" className="form-label">
        Booking ID:
      </label>
      <input type="text" className="form-control" id="bookingId" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input type="email" className="form-control" id="email" />
    </div>
    <button type="button" className="btn btn-danger">
      Cancel Booking
    </button>
  </div>
);

const NotFound = () => <h1>404 Not Found</h1>;

const DetailsBooking = () => {
  const params = useParams();
  return (
    <div className="container mt-5">
      <h3>Details</h3>
      <p>Booking ID: {params.id}</p>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h1>Home Component</h1>
      <button
        className="btn btn-outline-danger me-2"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => navigate("/about")}
      >
        About
      </button>
    </div>
  );
};

export default AppRouter;
