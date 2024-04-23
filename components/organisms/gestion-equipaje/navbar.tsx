import React from "react"
import takeOffLogo from "public/takeoff.svg"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-cyan-500">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={takeOffLogo} className="h-12" alt="TakeOff Logo" /> */}
          <Image src={takeOffLogo} alt="TakeOff" height={48} width={48} className=" h-12"></Image>

          <span className="self-center whitespace-nowrap text-2xl font-semibold">Singapur Airlines</span>
        </a>
        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
          <button
            type="button"
            className="rounded-lg bg-white px-4 py-2 text-center font-medium text-black hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Usuario
          </button>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
          <ul className="mt-4 flex flex-col p-4 text-xl font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-cyan-500 md:p-0">
            <li>
              <a href="#" className="block px-3 py-2 text-gray-900 md:p-0 md:hover:text-white">
                Tu Reserva
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-gray-900 md:p-0 md:hover:text-white">
                Ofertas y Destinos
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-gray-900 md:p-0 md:hover:text-white">
                Informacion y Ayuda
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
