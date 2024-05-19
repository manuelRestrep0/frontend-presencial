import React from "react"
import { IconAirplane } from "components/components-Auth-a/IconAirplane"

const Header: React.FC = () => {
  return (
    <header className="mb-4 flex items-center justify-between border-b border-gray-300 bg-neutral-50 p-4 text-white">
      <div className="flex items-center">
        <div className="flex space-x-4">
          <div className="w-10">
            <IconAirplane />
          </div>
          <button className="bg-white-600 rounded px-6 py-3 text-neutral-500 ">Reservar</button>
          <button className="bg-white-600 rounded px-6 py-3 text-neutral-500 ">Tus vuelos</button>
          <button className="bg-white-600 rounded px-6 py-3 text-neutral-500 ">Pagos</button>
          <button className="bg-white-600 rounded px-6 py-3 text-neutral-500 ">Check in</button>
        </div>
      </div>
      <div className="space-x-4">
        <button className="rounded bg-blue-500 px-6 py-3 text-neutral-50">Iniciar sesión</button>
        <button className="bg-neutral-0 rounded border-2 border-blue-500 px-6 py-3 text-blue-500">Registrarse</button>
      </div>
    </header>
  )
}

export default Header
