import { create } from "zustand"
import { listPassanger, listSeats, Passanger, Seat } from "./data.mock"

// Se empieza a hacer la integración con el backend

interface Store {
  listPassanger: Passanger[]
  listSeats: Seat[]
  totalPay: number
  actions: {
    updatePassangerSeat: (passangerIndex: number, newSeatName: string) => void
    getPriceSeatSelect: (seatName: string) => number | undefined
    updateTotalToPay: () => void
  }
}

const useGestionSeatStore = create<Store>((set) => ({
  listPassanger: listPassanger,
  totalPay: 0,
  listSeats: listSeats,
  actions: {
    updatePassangerSeat: (passangerIndex: number, newSeatName: string) =>
      set((state) => {
        // Encuentra el pasajero y el asiento en la lista de pasajeros y asientos
        // Y verifica que existan
        const foundPassanger = state.listPassanger.find((passanger) => passanger.index === passangerIndex)
        const foundSeat = state.listSeats.find((seat) => seat.name === newSeatName)
        if (!foundPassanger || !foundSeat) return state

        // Obtener el asiento actual del pasajero
        const currentSeat = state.listPassanger.find((passanger) => passanger.index === passangerIndex)?.seat
        // Modificar el asiento del pasajero
        const updatePassanger = state.listPassanger.map((passanger) => {
          if (passanger.index === passangerIndex) {
            return {
              ...passanger,
              seat: newSeatName,
            }
          }
          return passanger
        })

        let updateSeatList: Seat[] = state.listSeats // Inicializa updateSeatList con una copia de los asientos actuales del estado

        // Actualizar la lista de los asientos teniendo en cuenta el asiento seleccionado
        updateSeatList = state.listSeats.map((seat) => {
          if (seat.name === newSeatName) {
            return {
              ...seat,
              available: false,
            }
          }
          return seat
        })

        // Actualizar la lista de los asientos teniendo en cuenta el asiento actual del pasajero
        if (currentSeat) {
          updateSeatList = updateSeatList.map((seat) => {
            if (seat.name === currentSeat) {
              return {
                ...seat,
                available: true,
              }
            }
            return seat
          })
        }

        return { ...state, listPassanger: updatePassanger, listSeats: updateSeatList }
      }),
    getPriceSeatSelect: (seatName: string) => {
      if (seatName === "") return undefined
      const seatFound = listSeats.find((seat) => seat.name === seatName)
      return seatFound?.price
    },

    updateTotalToPay: () =>
      set((state) => {
        const listSeatsSelected = state.listSeats.filter((seat) => !seat.available)
        const total = listSeatsSelected.reduce((acc, seat) => acc + seat.price, 0)
        return { ...state, totalPay: total }
      }),
  },
}))

export default useGestionSeatStore
