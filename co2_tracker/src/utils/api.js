// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust based on your backend setup

export const addActivity = async (activity) => {
  const  userId = 2;
    return await axios.post(`${API_URL}/activities/${userId}`, activity);
};

export const getUserActivities = async (userId) => {
    userId = 2;
    return await axios.get(`${API_URL}/activities/${userId}`);
};

export const calculateEmissions = async (userId) => {
    return await axios.get(`${API_URL}/emissions/${userId}`);
};

export const getSuggestions = async () => {
    return await axios.get(`${API_URL}/suggestions`);
};
