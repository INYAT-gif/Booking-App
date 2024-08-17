// src/services/bookingService.js

export const book = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/book`, data);
      return response.data;
    } catch (error) {
      console.error('Error booking:', error.response.data);
      throw error;
    }
  };
  