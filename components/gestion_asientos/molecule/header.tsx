import { DocumentCheckIcon } from "@heroicons/react/24/outline"

interface Props {
  reserva: string
}

const Header = ({ reserva }: Props) => {
  return (
    <header className="text-gray-800">
      <h1 className="text-2xl font-bold text-blue-600">Gestion de asientos</h1>
      <h2 className="mt-2 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-plane -rotate-90"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
        </svg>
        <div>
          <p className="-mb-1 font-semibold text-gray-800">Número de reserva</p>
          <p>{reserva}</p>
        </div>
      </h2>
      <p className="mt-4 text-xs">Por favor ingresa los asientos que desee para cada pasajero</p>
    </header>
  )
}

export default Header
