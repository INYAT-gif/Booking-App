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
import CancelBooking from "./CancelBooking";
import BookingDetails from "./BookingDetails";

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
        <Route path="/details/:id" element={<BookingDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const About = () => <h1>About Component</h1>;

const NotFound = () => <h1>404 Not Found</h1>;

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
