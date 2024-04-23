import { UserIcon } from "@heroicons/react/24/solid"
import Seat from "../atom/seat"
import SelectSeat from "../organism/select-seat"
import useModal from "./modal/useModal"
import Modal from "./modal/modal"
import useGestionSeatStore from "../useGestionSeatStore"

interface Props {
  index: number
  name: string
  seat: string
  price?: number
}

const PassengerCell = ({ ...props }: Props) => {
  const { isOpen, openModal, closeModal } = useModal()
  const { actions, listSeats } = useGestionSeatStore()
  const { getPriceSeatSelect } = actions
  const priceSeatSelect = getPriceSeatSelect(props.seat)

  return (
    <>
      <article className="flex w-full items-center justify-between rounded-md">
        <section className="flex items-center gap-2">
          <div className="w-fit rounded-md bg-gray-600/20 p-2 text-gray-600">
            <UserIcon className="h-6 w-6" />
          </div>
          <div className=" font-semibold text-gray-700">
            <p className="-mb-1">{props.name}</p>
            <span className=" text-sm font-normal">Pasajero {props.index}</span>
          </div>
        </section>
        <section className="flex items-center gap-4">
          {/* <p className="text-xl font-bold text-gray-600">{priceSeatSelect ? `$ ${priceSeatSelect}` : "Sin asignar"}</p> */}
          <Seat seat={props.seat} />
          <button
            onClick={openModal}
            className="rounded-md bg-blue-500/30 px-4 py-2 font-semibold text-blue-500 transition-all hover:shadow-lg"
          >
            Seleccionar
          </button>
        </section>
      </article>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <SelectSeat namePassanger={props.name} indexPassanger={props.index} closeModal={closeModal} />
        </Modal>
      )}
    </>
  )
}

export default PassengerCell
