import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/booking';

export const book = async (bookingData) => {
  return axios.post(`${API_URL}/book`, bookingData);
};

export const cancelBooking = async (bookingData) => {
  return axios.put(`${API_URL}/cancel`, bookingData);
};

export const getBookingsBetweenDates = async (from, to) => {
  return axios.get(`${API_URL}/from/${from}/to/${to}`);
};

export const getBookingDetails = async (id) => {
  return axios.get(`${API_URL}/details/${id}`);
};
