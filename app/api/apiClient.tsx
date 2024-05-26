
import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://codefact.udea.edu.co/modulo-02',
  headers: {
    'Content-Type': 'application/json',
  },

});

export const setAuthToken = (token:any) => {
  if (token) {
    apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete apiClient.defaults.headers['Authorization'];
    localStorage.removeItem('token');
  }
};

export default apiClient;