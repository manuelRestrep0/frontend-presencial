import React from "react";

export interface Reserva {
    numeroReserva: number
    numPasajerosReserva: number
}

interface TitleProps {
    tituloReserva: number; // Cambia el tipo según corresponda
  }

const Title: React.FC<TitleProps> = ({tituloReserva}) => {
    return (
            <>
            <h1 className="text-4xl font-bold">Reserva #{tituloReserva}</h1>
        </>
    )
}

export default Title

  