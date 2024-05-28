import api from "../../config/api"
import { PersonAPI } from "../interface/person"

export async function postPerson(data: PersonAPI): Promise<number> {
  try {
    const response = await api.post("/v1/person/person", data)
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data)
  }
}
