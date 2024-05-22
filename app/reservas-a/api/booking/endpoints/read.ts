import api from "../../config/api"
import Booking from "../interface/booking"

export async function getBookings(): Promise<Booking[]> {
  try {
    const response = await api.get("/v1/booking/searchBookings")
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data)
  }
}
