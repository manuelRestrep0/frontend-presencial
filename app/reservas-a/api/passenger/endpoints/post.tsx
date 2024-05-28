import api from "../../config/api"
import Passenger from "../interface/passenger"

export async function postPassenger(data: Passenger): Promise<number> {
  try {
    const response = await api.post("/v1/passenger/passenger", data)
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data)
  }
}
