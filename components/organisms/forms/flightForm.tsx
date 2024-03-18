import React from 'react';

export default function FlightForm(){
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 flex justify-center">Ingresar información de vuelo</h2>
            <form className="grid grid-cols-3 gap-12">
                <div className="mb-12 col-span-1">
                    <label htmlFor="tipo_vuelo" className="block font-medium mb-1">Tipo de vuelo</label>
                    <select id="tipo_vuelo" name="tipo_vuelo" className="form-select w-full border border-gray-800 rounded-md">
                        <option value="internacional">Internacional</option>
                        <option value="nacional">Nacional</option>
                    </select>
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="tipo_aeronave1" className="block font-medium mb-1">Tipo de aeronave - Primera opción</label>
                    <select id="tipo_aeronave1" name="tipo_aeronave1" className="form-select border border-gray-800 rounded-md">
                        <option value="singapur">Singapur</option>
                    </select>
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="tipo_aeronave2" className="block font-medium mb-1">Tipo de aeronave - Segunda opción</label>
                    <select id="tipo_aeronave2" name="tipo_aeronave2" className="form-select border border-gray-800 rounded-md">
                        <option value="A320-200">A320-200</option>
                        <option value="A520-100">A520-100</option>
                    </select>
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="num_pasajeros" className="block font-medium mb-1">Número de pasajeros</label>
                    <input id="num_pasajeros" name="num_pasajeros" type="number" min="1" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="precio" className="block font-medium mb-1">Precio</label>
                    <input id="precio" name="precio" type="number" min="0" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="impuestos" className="block font-medium mb-1">Porcentaje de impuestos</label>
                    <input id="impuestos" name="impuestos" type="number" min="0" max="100" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="sobretasa" className="block font-medium mb-1">Porcentaje de sobretasa</label>
                    <input id="sobretasa" name="sobretasa" type="number" min="0" max="100" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="origen" className="block font-medium mb-1">Origen</label>
                    <select id="origen" name="origen" className="form-select w-full border border-gray-800 rounded-md">
                        <option value="MDE">MDE</option>
                        <option value="BGA">BGA</option>
                        <option value="CAF">CAF</option>
                        <option value="MAD">MAD</option>
                    </select>
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="fecha_salida" className="block font-medium mb-1">Fecha de salida</label>
                    <input id="fecha_salida" name="fecha_salida" type="date" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="hora_salida" className="block font-medium mb-1">Hora de salida</label>
                    <input id="hora_salida" name="hora_salida" type="time" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="destino" className="block font-medium mb-1">Destino</label>
                    <select id="destino" name="destino" className="form-select w-full border border-gray-800 rounded-md">
                        <option value="MDE">MDE</option>
                        <option value="BGA">BGA</option>
                        <option value="CAF">CAF</option>
                        <option value="MAD">MAD</option>
                    </select>
                </div>
                <div className="mb-12 col-span-1">
                    <label htmlFor="fecha_llegada" className="block font-medium mb-1">Fecha de llegada</label>
                    <input id="fecha_llegada" name="fecha_llegada" type="date" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="hora_llegada" className="block font-medium mb-1">Hora de llegada</label>
                    <input id="hora_llegada" name="hora_llegada" type="time" className="form-input w-full border border-gray-800 rounded-md" required />
                </div>
                <div className="col-span-3 flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Registrar vuelo</button>
                </div>
            </form>
        </div>
    );
}



