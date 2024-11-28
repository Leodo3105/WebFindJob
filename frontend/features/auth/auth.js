import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data; // Trả về { token, user }
    } catch (error) {
        throw error.response?.data || { message: 'Login failed' };
    }
};

export const register = async (email, password, role) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { email, password, role });
        return response.data; // Trả về kết quả từ server
    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' };
    }
};
