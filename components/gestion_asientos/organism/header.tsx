import React from "react";
import Title, { Reserva } from "../atom/title";

interface HeaderProps {
  reserva: Reserva;
  total: number;
}

const Header: React.FC<HeaderProps> = ({ reserva, total }) => {
  return (
    <div className="header flex items-center justify-between ml-8 mt-8">
      <div className="flex items-center">
        <Title tituloReserva={reserva.numeroReserva} />
      </div>
      <div className="flex items-center">
        <div className="bg-blue-200 text-2xl text-black px-4 py-1 mr-8 border border-black flex items-center">
          <h1 className="ml-12 mr-2 text-xl font-bold">Total:</h1><h1 className="text-base mr-12"> $ {total} (COP)</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
