import { ClassSeat } from "./organism/table-seats"

export interface Passanger {
  index: number
  name: string
  seat: string
}

export interface Seat {
  name: string
  ubication: "Ventana" | "Pasillo" | "Centro"
  classSeat: ClassSeat
  price: number
  available: boolean
}

export const listPassanger: Passanger[] = [
  { index: 1, name: "Juan Perez", seat: "" },
  { index: 2, name: "Maria Lopez", seat: "" },
  { index: 3, name: "Pedro Ramirez", seat: "" },
  { index: 4, name: "Ana Rodriguez", seat: "" },
]

export const listSeats: Seat[] = [
  { name: "A-1", ubication: "Pasillo", price: 120000, classSeat: ClassSeat.First, available: true },
  { name: "B-1", ubication: "Centro", price: 90000, classSeat: ClassSeat.Economic, available: true },
  { name: "C-1", ubication: "Ventana", price: 150000, classSeat: ClassSeat.First, available: true },
  { name: "A-2", ubication: "Pasillo", price: 110000, classSeat: ClassSeat.Business, available: true },
  { name: "B-2", ubication: "Centro", price: 85000, classSeat: ClassSeat.Economic, available: true },
  { name: "C-2", ubication: "Ventana", price: 130000, classSeat: ClassSeat.First, available: true },
  { name: "A-3", ubication: "Pasillo", price: 125000, classSeat: ClassSeat.Business, available: true },
  { name: "B-3", ubication: "Centro", price: 95000, classSeat: ClassSeat.Economic, available: true },
  { name: "C-3", ubication: "Ventana", price: 140000, classSeat: ClassSeat.First, available: true },
]
