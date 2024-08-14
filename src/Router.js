import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import BookingList from './BookingList';
import BookingForm from './BookingForm';
import CancelBookingForm from './CancelBookingForm';

const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
          <li>
            <Link to="/book">Book a Slot</Link>
          </li>
          <li>
            <Link to="/cancel">Cancel a Booking</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookings" component={BookingList} />
        <Route path="/book" component={BookingForm} />
        <Route path="/cancel" component={CancelBookingForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;