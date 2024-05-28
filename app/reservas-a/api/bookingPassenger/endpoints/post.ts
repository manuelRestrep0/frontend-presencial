import api from "../../config/api"
import BookingPassenger from "../interface/bookingPassenger"

export async function postBookingPassenger(bookingPassenger: BookingPassenger): Promise<BookingPassenger> {
  try {
    const response = await api.post("/v1/bookingPassenger/bookingPassenger", bookingPassenger)
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data)
  }
}
