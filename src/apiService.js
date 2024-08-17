import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/booking';

export const book = async (bookingData) => {
    return await axios.post(`${BASE_URL}/book`, bookingData);
};

export const cancelBooking = async (bookingData) => {
    return await axios.put(`${BASE_URL}/cancel`, bookingData);
};

export const getBookingsBetweenDates = async (from, to) => {
    return await axios.get(`${BASE_URL}/from/${from}/to/${to}`);
};

export const getBookingDetails = async (id) => {
    return await axios.get(`${BASE_URL}/details/${id}`);
};
