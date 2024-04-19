import { Reserva } from "../atom/title";

interface listHeaderProps {
    reserva: Reserva
}

const ListHeader: React.FC<listHeaderProps> = ({reserva}) => {
    return (
            <>
            <div className="mt-10 ml-10 flex items-center justify-between mr-10 mb-6">
                <h1 className="text-2xl">Listado de Pasajeros</h1>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg text-gray-500 mr-12">Cantidad de pasajeros</h1>
                    <h1 className="text-lg text-gray-500">{reserva.numPasajerosReserva} </h1>
                </div>
            </div><div className="border-b border-blue-300 mr-5 ml-5"></div>
        </>
    )
}

export default ListHeader
