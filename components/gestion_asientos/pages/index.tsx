import { useEffect } from "react"
import MountPay from "../atom/mount"
import { Seat } from "../data.mock"
import { serviceGetSeats } from "../gestion-asientos.services"
import Header from "../molecule/header"
import PassengerList from "../organism/passanger-list"
import useGestionSeatStore from "../useGestionSeatStore"

interface Props {
  reserva: string
}

const GestionAsientosPage = ({ reserva }: Props) => {
  const { actions } = useGestionSeatStore()
  const { setListSeats } = actions

  const getSeats = async () => {
    const res = await serviceGetSeats()
    if (res.status) {
      setListSeats(res.data as Seat[])
      return
    }
    alert("Error al obtener los asientos")
  }

  useEffect(() => {
    getSeats()
  }, [])

  return (
    <main className="relative grid min-h-screen">
      <div className="mx-auto w-[90%] py-4 md:w-[70%]">
        <div className="flex items-center justify-between">
          <Header reserva={reserva} />
          <MountPay />
        </div>
        <PassengerList />
      </div>
    </main>
  )
}

export default GestionAsientosPage
