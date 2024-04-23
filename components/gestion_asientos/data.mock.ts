import { ClassSeat } from "./organism/table-seats"

export interface SeatBackend {
  id: number
  seatClass: {
    id: number
    type: "TOURIST" | "BUSINESS" | "FIRST_CLASS"
  }
  seatStatus: {
    id: number
    status: "AVAILABLE" | "BOOKED" | "OCCUPIED"
  }
  seatLocation: {
    id: number
    location: "WINDOW" | "AISLE" | "MIDDLE"
  }
  seatLabel: string
  seatFee: string
}

export interface Passanger {
  index: number
  name: string
  seat: string
}

export enum UbicationSeat {
  WINDOW = "WINDOW",
  AISLE = "AISLE",
  CENTER = "CENTER",
}

export enum UbicationSeatLabel {
  WINDOW = "Ventana",
  AISLE = "Pasillo",
  CENTER = "Centro",
}

export interface Seat {
  name: string
  ubication: UbicationSeat
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
  {
    name: "A-1",
    ubication: UbicationSeat.AISLE,
    price: 120000,
    classSeat: ClassSeat.EXECUTIVE,
    available: true,
  },
  {
    name: "B-1",
    ubication: UbicationSeat.CENTER,
    price: 90000,
    classSeat: ClassSeat.FIRST_CLASS,
    available: true,
  },
  {
    name: "C-1",
    ubication: UbicationSeat.CENTER,
    price: 150000,
    classSeat: ClassSeat.TOURIST,
    available: true,
  },
  {
    name: "A-2",
    ubication: UbicationSeat.WINDOW,
    price: 110000,
    classSeat: ClassSeat.FIRST_CLASS,
    available: true,
  },
  {
    name: "B-2",
    ubication: UbicationSeat.WINDOW,
    price: 85000,
    classSeat: ClassSeat.FIRST_CLASS,
    available: true,
  },
  {
    name: "C-2",
    ubication: UbicationSeat.CENTER,
    price: 130000,
    classSeat: ClassSeat.EXECUTIVE,
    available: true,
  },
  {
    name: "A-3",
    ubication: UbicationSeat.CENTER,
    price: 125000,
    classSeat: ClassSeat.EXECUTIVE,
    available: true,
  },
  {
    name: "B-3",
    ubication: UbicationSeat.WINDOW,
    price: 95000,
    classSeat: ClassSeat.TOURIST,
    available: true,
  },
  {
    name: "C-3",
    ubication: UbicationSeat.WINDOW,
    price: 140000,
    classSeat: ClassSeat.TOURIST,
    available: true,
  },
]
