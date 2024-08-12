import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookingList from './BookingList';
import BookingForm from './BookingForm';
import CancelBookingForm from './CancelBookingForm';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book">Book</Link>
        <Link to="/cancel">Cancel Booking</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BookingList />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/cancel" element={<CancelBookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
