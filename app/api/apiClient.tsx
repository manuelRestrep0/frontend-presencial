
import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://codefact.udea.edu.co/modulo-02',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer super.admin.token',
  },

});

export default apiClient;