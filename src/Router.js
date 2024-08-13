import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import AxiosDemo from "./AxiosDemo";
import Header from "./Header";

const RouterDemo = () => {
  return (
    <div>
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
    </div>
  );
};

const About = () => <h1>About Component</h1>;
const CancelBooking = () => <h1>Cancel Booking Component</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

const DetailsBooking = () => {
  const params = useParams();
  // TODO: Using useEffect, you can call get booking details by id and then set the response data
  // into the booking object and display data on a card
  return (
    <div>
      <h3>Details</h3>
      <p>Booking ID: {params.id}</p>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Component</h1>
      <a
        href="#"
        className="btn btn-outline-danger"
        onClick={() => navigate(-1)}
      >
        Back
      </a>
      <a
        href="#"
        className="btn btn-outline-success"
        onClick={() => navigate("/about")}
      >
        About
      </a>
    </div>
  );
};

export default RouterDemo;
