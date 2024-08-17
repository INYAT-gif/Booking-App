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
import axios from "axios";  // <-- Import axios here

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

const About = () => <h1>About Component</h1>;

const CancelBooking = () => <h1>Cancel Booking Component</h1>;

const NotFound = () => <h1>404 Not Found</h1>;

const DetailsBooking = () => {
  const params = useParams();
  const [booking, setBooking] = React.useState(null);

  React.useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/booking/details/${params.id}`
        );
        setBooking(response.data);
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };

    fetchBooking();
  }, [params.id]);

  return (
    <div>
      <h3>Details</h3>
      {booking ? (
        <div>
          <p>Booking ID: {booking.id}</p>
          <p>DateTime: {booking.dateTime}</p>
          <p>Booked: {booking.booked ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading booking details...</p>
      )}
    </div>
  );
};

export default RouterDemo;
