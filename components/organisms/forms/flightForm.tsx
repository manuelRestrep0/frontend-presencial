'use client';
import React, { FormEvent, useState } from 'react';
import { BtnGuardar } from '@components/atoms/buttons';
import { PrincipalText, Subtitle } from '@components/atoms/text';

export default function FlightForm(){

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Obtener los valores de origen, destino, fecha de salida y fecha de llegada
        const origen = (event.target as HTMLFormElement).origen.value;
        const destino = (event.target as HTMLFormElement).destino.value;
        const fechaSalida = new Date((event.target as HTMLFormElement).fecha_salida.value);
        const fechaLlegada = new Date((event.target as HTMLFormElement).fecha_llegada.value);

        // Validación 1: La ciudad de destino no debe ser la misma que la de origen
        if (origen === destino) {
            setErrorMessage('La ciudad de destino no puede ser la misma que la de origen.');
            return; // Detener el envío del formulario
        }

        // Validación 2: La fecha de llegada no debe ser antes que la fecha de salida
        if (fechaLlegada < fechaSalida) {
            setErrorMessage('La fecha de llegada no puede ser antes que la fecha de salida.');
            return; // Detener el envío del formulario
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        // Agregar aquí el código para enviar el formulario

        // Convertir fecha de llegada al formato YYYY-MM-DD
        const formattedFechaLlegada = fechaLlegada.toISOString().slice(0, 10);
        console.log('Fecha de llegada en formato YYYY-MM-DD:', formattedFechaLlegada);
    };

    const closeModal = () => {
        setErrorMessage(null);
    };

    return (
        <div className="max-w-6xl mx-auto h-full">
            <div className='mt-8 mb-8'>
                <Subtitle subtitle="Ingresar información básica del vuelo" ></Subtitle>
            </div>
            <form className="grid grid-cols-3 gap-12" onSubmit={handleSubmit}>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Tipo de vuelo"></PrincipalText>
                    <select id="tipo_vuelo" name="tipo_vuelo" className="form-select w-full border text-xl py-2 px-3 border-gray-800 rounded-md">
                        <option value="internacional">Internacional</option>
                        <option value="nacional">Nacional</option>
                    </select>
                </div>
                <div className="mb-2 col-span-1">
                <PrincipalText text="Tipo de aeronave "></PrincipalText>
                <div className='flex justify-center'>
                    <div className='pr-2'>
                    <select id="tipo_aeronave1" name="tipo_aeronave1" className="form-select border text-xl py-2 px-3 pr-4 border-gray-800 rounded-md">
                        <option value="singapur">Airbus</option>
                        <option value="singapur">Boeing</option>
                    </select>
                    </div>
                    <div className='pl-2'>
                    <select id="tipo_aeronave2" name="tipo_aeronave2" className="form-select border text-xl py-2 px-3 border-gray-800 rounded-md">
                        <option value="A320-200">A320-200</option>
                        <option value="A520-100">A520-100</option>
                    </select>
                    </div>
                    </div>
                </div>
            
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Número de pasajeros"></PrincipalText>
                    <input id="num_pasajeros" name="num_pasajeros" type="number" min="1" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md text-center" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Precio"></PrincipalText>
                    <input id="precio" name="precio" type="number" min="0" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md text-center" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Porcentaje de impuestos"></PrincipalText>
                    <input id="impuestos" name="impuestos" type="number" min="0" max="100" step="0.01" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md text-center" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Porcentaje de sobretasa"></PrincipalText>
                    <input id="sobretasa" name="sobretasa" type="number" min="0" max="100" step="0.01" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md text-center" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Origen"></PrincipalText>
                    <select id="origen" name="origen" className="form-select w-full text-xl py-2 px-3 border border-gray-800 rounded-md">
                        <option value="MDE">MDE</option>
                        <option value="BGA">BGA</option>
                        <option value="CAF">CAF</option>
                        <option value="MAD">MAD</option>
                    </select>
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Fecha de salida"></PrincipalText>
                    <input id="fecha_salida" name="fecha_salida" type="date" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Hora de salida"></PrincipalText>
                    <input id="hora_salida" name="hora_salida" type="time" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Destino"></PrincipalText>
                    <select id="destino" name="destino" className="form-select w-full text-xl py-2 px-3 border border-gray-800 rounded-md">
                        <option value="MDE">MDE</option>
                        <option value="BGA">BGA</option>
                        <option value="CAF">CAF</option>
                        <option value="MAD">MAD</option>
                    </select>
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Fecha de llegada"></PrincipalText>
                    <input id="fecha_llegada" name="fecha_llegada" type="date" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Hora llegada"></PrincipalText>
                    <input id="hora_llegada" name="hora_llegada" type="time" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md" required />
                </div>
                <div className="col-span-3 flex justify-center mb-4">
                    <BtnGuardar/>
                </div>
                {errorMessage && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-md shadow-lg">
                            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                            <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Cerrar</button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}



