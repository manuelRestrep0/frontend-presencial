// En PassengerSelectable.tsx

import React, { useState } from "react";
import { Pasajero, Asiento } from "../organism/component";
import { Reserva } from "../atom/title";
import Button from "../atom/button";
import UserIcon from "../atom/userIcon";
import SeleccionarAsiento from "../organism/component";
import SelectionSuccess from "./card";

interface PassengerSelectableProp {
    pasajero: Pasajero;
    reserva: Reserva;
}

const PassengerSelectable: React.FC<PassengerSelectableProp> = ({pasajero, reserva}) => {
    const [mostrarSeleccionarAsiento, setMostrarSeleccionarAsiento] = useState<boolean>(false);
    const [pasajeroActualizado, setPasajeroActualizado] = useState<Pasajero>(pasajero);
    const [mostrarExito, setMostrarExito] = useState<boolean>(false);
    const [mostrarFallo, setMostrarFallo] = useState<boolean>(false);

    const toggleSeleccionarAsiento = () => {
        setMostrarSeleccionarAsiento(!mostrarSeleccionarAsiento);
    };

    const handleConfirmarAsiento = (asientoSeleccionado: Asiento) => {
        const pasajeroActualizado = { ...pasajero, asiento: asientoSeleccionado };
        setPasajeroActualizado(pasajeroActualizado);
        setMostrarSeleccionarAsiento(false);
        setMostrarExito(true);
    };
    
    const handleNoDisponible = (asientoSeleccionado: null) => {
        setMostrarFallo(true)
    }

    const handleCloseExito = () => {
        setMostrarExito(false);
      };

    const handleCloseNoDisponible = () => {
        setMostrarExito(false);
      };

    return (
        <>

        {mostrarExito && (
            <tr>
                        <td colSpan={1}>
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                                <div className="bg-gray-200 p-7 rounded-lg shadow-2xl relative z-10">
                                    <SelectionSuccess onClose={handleCloseExito} status={true} /></div>
                            </div>
                        </td>
                    </tr>
        )}

        {mostrarFallo && (
            <tr>
                        <td colSpan={1}>
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                                <div className="bg-gray-200 p-7 rounded-lg shadow-2xl relative z-10">
                                    <SelectionSuccess onClose={handleCloseNoDisponible} status={false} /></div>
                            </div>
                        </td>
                    </tr>
        )}

        <table className="border-collapse w-full">
            <tbody>
                <tr>
                    <td colSpan={5}>
                        <div className="relative mr-20 ml-20 mt-4 flex items-center">
                            <div>
                                <UserIcon />
                            </div>
                            <div className="ml-8 w-1/2">
                                <h1 className="text-2xl">{pasajeroActualizado.nombre}</h1>
                                <h1 className="text-sm text-gray-500">Pasajero {pasajeroActualizado.numeroPasajero}</h1>
                            </div>
                            <div className="ml-32 mr-12">
                                <Button text="Seleccionar asiento" width="w-48" pd="p-3" onClick={toggleSeleccionarAsiento}/>
                            </div>
                            <div className={`text-base text-black px-4 py-2 w-72 flex justify-center border border-dashed border-black hover:border-dotted ${pasajeroActualizado.asiento ? 'bg-green-300' : 'bg-slate-300'}`}>
                                <h1>
                                    {pasajeroActualizado.asiento 
                                        ? `${pasajeroActualizado.asiento.silla}-${pasajeroActualizado.asiento.clase} (${pasajeroActualizado.asiento.ubicacion})`
                                        : "Sin asiento asignado"
                                    }
                                </h1>
                            </div>
                            <div>
                            <h1 className="text-xl px-4 py-2 w-52 flex justify-center"> {pasajeroActualizado.asiento 
                                        ? `$ ${pasajeroActualizado.asiento.precio} (COP)`
                                        : "$ 0 (COP)"}
                                        </h1> 
                            </div>
                        </div>
                    </td>
                </tr>
                {mostrarSeleccionarAsiento && (
                    <tr>
                        <td colSpan={4}>
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                                <div className="bg-white p-4 rounded-lg shadow-lg relative z-10">
                                    <SeleccionarAsiento onClose={() => setMostrarSeleccionarAsiento(false)} pasajero={pasajeroActualizado} reserva={reserva} onConfirm={handleConfirmarAsiento} />
                                </div>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    );
    
    
}

export default PassengerSelectable;
