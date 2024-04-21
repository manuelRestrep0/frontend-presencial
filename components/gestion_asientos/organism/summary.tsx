import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from "@heroicons/react/24/solid"
import { ClassSeat, colorClassSeat } from "./table-seats"
import { SeatIcon } from "../atom/seat"
import useGestionSeatStore from "../useGestionSeatStore"

interface RowSummaryProps {
  indexPassanger: number
  seat: string
  namePassanger: string
}

const RowSummary = ({ indexPassanger, namePassanger, seat }: RowSummaryProps) => {
  const { listSeats } = useGestionSeatStore()
  const seatFound = listSeats.find((s) => s.name === seat)
  if (!seatFound) return null
  const { classSeat, price } = seatFound
  const color = colorClassSeat[classSeat]

  return (
    <li className="grid grid-cols-4 items-center ">
      <section className="flex items-center gap-2">
        <div className="w-fit rounded-md bg-gray-600/20 p-2 text-gray-600">
          <UserIcon className="h-6 w-6" />
        </div>
        <div className=" font-semibold text-gray-700">
          <p className="-mb-1">{namePassanger}</p>
          <span className=" text-sm font-normal">Pasajero {indexPassanger}</span>
        </div>
      </section>
      <div className="flex items-center gap-2 font-semibold text-gray-500">
        <SeatIcon />
        {seat}
      </div>
      <div className={`h-fit w-fit rounded-full px-6 py-1 text-center text-xs font-semibold ${color}`}>{classSeat}</div>
      <span className="text-xl font-bold text-gray-600">$ {price}</span>
    </li>
  )
}

const Summary = () => {
  const { totalPay, listPassanger } = useGestionSeatStore()
  return (
    <section className="mx-auto w-[50%] min-w-[300px] rounded-md bg-white p-8 shadow-md">
      <h3 className="text-center text-xl font-bold text-blue-500">Resumen de la selección</h3>
      <ul className="mt-8 flex flex-col gap-0">
        {listPassanger.map(({ index, name, seat }, _) => (
          <div key={index} className="border border-l-0 border-r-0 border-dotted border-gray-500 py-4">
            <RowSummary indexPassanger={index} namePassanger={name} seat={seat} />
          </div>
        ))}
      </ul>
      <section className="gap- my-4 flex flex-col text-right font-semibold text-gray-700">
        Monto total:
        <span className="text-2xl">$ {totalPay}</span>
      </section>
      <section className="mt-2 flex justify-center gap-4">
        <button className="flex w-fit items-center justify-center rounded-md bg-gray-600 px-6 py-2 text-sm font-bold uppercase text-white transition-all hover:bg-gray-800 hover:shadow-lg">
          <ChevronLeftIcon className="h-6 w-6" />
          Volver
        </button>
        <button className="flex w-fit items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-sm font-bold uppercase text-white transition-all hover:bg-blue-800 hover:shadow-lg">
          Continuar
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </section>
    </section>
  )
}

export default Summary
