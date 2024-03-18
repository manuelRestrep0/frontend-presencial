import React from 'react';
import { BtnGuardar } from '@components/atoms/buttons';
import { PrincipalText, Subtitle } from '@components/atoms/text';

export default function FlightForm(){
    return (
        <div className="max-w-6xl mx-auto h-full">
            <div className='mt-8 mb-8'>
                <Subtitle subtitle="Ingresar información básica del vuelo" ></Subtitle>
            </div>
            <form className="grid grid-cols-3 gap-12">
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
                        <option value="singapur">Singapur</option>
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
                    <input id="impuestos" name="impuestos" type="number" min="0" max="100" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md text-center" required />
                </div>
                <div className="mb-2 col-span-1">
                    <PrincipalText text="Porcentaje de sobretasa"></PrincipalText>
                    <input id="sobretasa" name="sobretasa" type="number" min="0" max="100" className="form-input w-full text-xl py-2 px-3 border border-gray-800 rounded-md text-center" required />
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
            </form>
        </div>
    );
}



