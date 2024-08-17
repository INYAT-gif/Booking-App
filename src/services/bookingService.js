import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1/booking";


const book = (bookingData) => {
    return axios.post(`${API_BASE_URL}/book`, bookingData);
};

const cancelBooking = (bookingData) => {
    return axios.put(`${API_BASE_URL}/cancel`, bookingData);
};

const getAllBookingsBetweenDates = (from, to) => {
    return axios.get(`${API_BASE_URL}/from/${from}/to/${to}`);
};

const getBookingDetails = (id) => {
    return axios.get(`${API_BASE_URL}/details/${id}`);
};

export default {
    book,
    cancelBooking,
    getAllBookingsBetweenDates,
    getBookingDetails
};
