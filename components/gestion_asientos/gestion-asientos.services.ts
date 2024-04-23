import axios from "axios"
import { Seat } from "./data.mock"

interface RequestResponse<T> {
  data: T | string
  status: boolean
}

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
})

export const serviceGenerateSeats = async (numberSeats: number) => {
  try {
    const response = await http.get(`seats/generateSeats?nSeats=${numberSeats}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const serviceGetSeats = async (): Promise<RequestResponse<string | Seat[]>> => {
  try {
    const response = await http.get("seats/getAvailableSeats?status=AVAILABLE")
    const data = response.data
    const seats = data.map((seat: any) => {
      return {
        name: seat.seatLabel,
        ubication: seat.seatLocation.location,
        price: Number(seat.seatFee),
        available: seat.seatStatus.status === "AVAILABLE",
        classSeat: seat.seatClass.type,
      }
    })
    return {
      data: seats,
      status: true,
    }
  } catch (error) {
    console.error(error)
    return {
      data: "Error al obtener los asientos",
      status: false,
    }
  }
}
