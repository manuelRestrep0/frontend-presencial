import api from "../../config/api"
import Booking from "../interface/booking"

export async function postBooking(booking: Booking): Promise<number> {
  try {
    const response = await api.post("/v1/booking/booking", booking)
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data)
  }
}
