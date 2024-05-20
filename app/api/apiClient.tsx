
import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://codefact.udea.edu.co/modulo-02',
  headers: {
    'Content-Type': 'application/json',
  },

});

export default apiClient;