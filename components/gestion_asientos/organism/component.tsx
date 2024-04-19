import React, { useState } from "react";
import { Reserva } from "../atom/title";
import Button from "../atom/button";
// import EstadoAsiento from "../molecule/card";

export interface Asiento {
    silla: string;
    clase: string;
    ubicacion: string;
    precio: number;
}

export interface Pasajero {
    nombre: string;
    numeroPasajero: number;
    asiento?: Asiento;
    especificaciones: string;
}

interface SeleccionarAsientoProps {
    onClose: () => void;
    pasajero: Pasajero;
    reserva: Reserva;
    onConfirm: (asientoSeleccionado: Asiento) => void;
}

const datosAsientos = [
  { silla: "A-1", clase: "Primera Clase", ubicacion: "Ventana", precio: 0},
  { silla: "B-1", clase: "Económica", ubicacion: "Pasillo", precio: 12000},
  { silla: "C-1", clase: "Business", ubicacion: "Ventana",precio: 12000 },
  { silla: "A-2", clase: "Primera Clase", ubicacion: "Ventana",precio: 10700 },
  { silla: "B-2", clase: "Económica", ubicacion: "Pasillo",precio: 10040 },
  { silla: "C-2", clase: "Business", ubicacion: "Ventana", precio: 17000 },
  { silla: "A-3", clase: "Primera Clase", ubicacion: "Ventana",precio: 81000 },
  { silla: "B-3", clase: "Económica", ubicacion: "Pasillo",precio: 91000 },
  { silla: "C-3", clase: "Business", ubicacion: "Ventana",precio: 51000 },
]

const SeleccionarAsiento: React.FC<SeleccionarAsientoProps> = ({onClose, pasajero, reserva, onConfirm}) => {
    const [asientoSeleccionado, setAsientoSeleccionado] = useState<Asiento | null>(null);

    const handleAsientoSeleccionado = (asiento: Asiento) => {
        setAsientoSeleccionado(asiento);
    };

    const handleConfirmar = () => {
        if (asientoSeleccionado) {
            onConfirm(asientoSeleccionado);
        }
    };


    return (
        <div className="seleccionar_asiento-overlay items-center mt-4 mb-4">
            <div className="seleccionar_asiento-content">
                <h6 className="text-sm text-gray-500">Pasajero: {pasajero.numeroPasajero}</h6>
                <div className="cabeza flex justify-between">
                    <h3 className="text-2xl">{pasajero.nombre}</h3>
                    <h6>Reserva #{reserva.numeroReserva}</h6>
                </div>
                <table className="border-separate p-2">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Silla</th>
                            <th>Clase</th>
                            <th>Ubicación</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosAsientos.map((asiento, index) => (
                            <tr key={index}>
                                <td className="border-separate p-2">
                                    <input
                                        type="radio"
                                        name="asiento"
                                        checked={asientoSeleccionado === asiento}
                                        onChange={() => handleAsientoSeleccionado(asiento)}
                                    />
                                </td>
                                <td className="border-separate p-2">
                                    {asiento.silla}
                                </td>
                                <td className="border-separate p-2">
                                    {asiento.clase}
                                </td>
                                <td className="border-separate p-2">
                                    {asiento.ubicacion}
                                </td>
                                <td className="border-separate p-2">
                                    $ {asiento.precio} (COP)
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex gap-2 justify-center mt-4">
                    <Button text="Cancelar" width="w-24" pd="p-1" onClick={onClose}/>
                    <Button text="Confirmar" width="w-24" pd="p-1" onClick={handleConfirmar}/>
                </div>
            </div>
        </div>
    );  
}

export default SeleccionarAsiento;
