import axios, { AxiosInstance } from "axios"

const baseURL = "https://codefact.udea.edu.co/modulo-08"

const api: AxiosInstance = axios.create({
  baseURL,
})

export default api
