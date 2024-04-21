import MountPay from "../atom/mount"
import Header from "../molecule/header"
import PassengerList from "../organism/passanger-list"
import SelectSeat from "../organism/select-seat"

interface Props {
  reserva: string
}

const GestionAsientosPage = ({ reserva }: Props) => {
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
