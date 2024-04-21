import { SeatIcon, SeatIconOff } from "../atom/seat"
import TableSeats from "./table-seats"

interface SelectSeat {
  closeModal: () => void
  namePassanger: string
  indexPassanger: number
}

const SelectSeat = ({ closeModal, namePassanger, indexPassanger }: SelectSeat) => {
  return (
    <section className="mx-auto w-[70%] min-w-[300px] rounded-md bg-white p-8 shadow-md">
      <header className="flex flex-col gap-1">
        <div className="font-semibold text-gray-500">
          <h5>{namePassanger}</h5>
          <p className="text-xs font-medium">Pasajero {indexPassanger}</p>
        </div>
        <h4 className="text-center text-lg font-semibold text-blue-600">Selecciona tu asiento</h4>
        <div className="flex items-center justify-center gap-2">
          <span className="font bold flex items-center gap-2 text-center text-sm text-gray-600">
            <SeatIcon />
            Disponible
          </span>
          <div className="h-[20px] w-[1px] bg-gray-600"></div>
          <span className="font bold flex items-center gap-2 text-center text-sm text-gray-600">
            Ocupado
            <SeatIconOff />
          </span>
        </div>
      </header>
      <TableSeats closeModal={closeModal} indexPassanger={indexPassanger} />
    </section>
  )
}

export default SelectSeat
