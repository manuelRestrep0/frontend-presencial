'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MenuIcon from '@mui/icons-material/Menu';
import PlaceIcon from '@mui/icons-material/Place';
import Navbar from 'components/navbar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Reserva {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    fleet_size: string;
    website: string;
    destinations: Array<string>;
}

export default function Reservas() {
    const [reservas, setReservas] = useState<Reserva[]>([]);

    const getReservas = async () => {
        await fetch('https://freetestapi.com/api/v1/airlines')
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Hubo un problema con la solicitud fetch: ' + response.status);
                }
                else {
                    setReservas(await response.json() as Reserva[]);
                }
        });
    };

    useEffect(() => {
        getReservas();
    }, []);
    
    const [inputValue, setInputValue] = useState('Origen, Identificador, etc...');
    const [selectValue, setSelectValue] = useState('any');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectValue(event.target.value);
    };

    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen max-h-screen">
            <Navbar />
            <div className='flex flex-col justify-center items-center w-screen h-full'>
                <section className='flex flex-col justify-center items-start w-3/4 h-auto border rounded-2xl p-10'>
                    <section className="flex flex-col justify-center items-start w-full h-auto mb-3">
                        <h1 className='font-bold text-2xl mb-3'>Tus reservas</h1>
                        <p className='text-xl'>Aquí podrá ver las reservas realizadas y sus estados.</p>
                    </section>
                    <section className='flex flex-row justify-start items-center w-full h-auto mb-3'>
                        <input type="text" value={inputValue} onChange={handleInputChange} className='flex flex-row h-12 w-80 px-3 border mr-6 rounded-xl' />
                        <select name="column" id="column" value={selectValue} onChange={handleSelectChange} className='flex flex-row h-12 w-52 px-3 border mr-6 rounded-xl'>
                            <option value="any">Columna</option>
                        </select>
                        <FilterAltIcon className='w-10 h-10 cursor-pointer' />
                        <Link href="/reservaB/formReservaB" className='flex flex-row justify-center items-center w-52 h-12 bg-[#2196F3] font-bold text-xl text-white rounded-xl ml-80'>Reservar +</Link>
                    </section>
                    <section className="flex flex-col justify-center items-start w-full">
                        <table className='flex flex-col w-full h-auto justify-start items-center'>
                            <thead className='flex flex-row w-full justify-center items-center h-16'>
                                <tr className='flex flex-row w-full justify-between items-center h-full border-b'>
                                    {columns.map((c) => (
                                        <th key={c.field} className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                            {c.headerName}
                                            <ArrowDownwardIcon className='pl-1' />
                                        </th>
                                    ))}
                                    <th className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                        Modificar
                                    </th>
                                    <th className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                        Cancelar
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="flex flex-col w-full justify-between items-start overflow-auto max-h-52">
                                {reservas.map((r) => {
                                    return (
                                        <tr key={r.id} className='flex flex-row w-full justify-between items-start p-4 border-b hover:bg-gray-200'>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                {r.id}
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                <LocationOnIcon />
                                                {r.name}
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                <LocationOnIcon />
                                                {r.country}
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                {r.salida}
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                {r.pasajeros}
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-2/3 rounded-3xl w-1/8 text-white font-semibold' style={{ width: '12.5%', backgroundColor: r.color }}>
                                                {r.estado === "Pagado" && <CheckCircleIcon className='mr-3' />}
                                                {r.estado === "Pendiente" && <AccessTimeIcon className='mr-3' />}
                                                {r.estado === "Cancelado" && <CancelIcon className='mr-3' />}
                                                {r.estado === "CheckIn" && <PlaceIcon className='mr-3' />}
                                                {r.estado}
                                            </td>
                                            <td key={r.id} className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                <Link href={`/reservaB/${r.id}`} className='flex flex-row justify-center items-center w-full h-full'>
                                                    <EditIcon />
                                                </Link>
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                <DeleteIcon className='cursor-pointer' />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </section>
                </section>
            </div>
        </div>
    )

}
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'origen', headerName: 'Origen' },
    { field: 'destino', headerName: 'Destino' },
    { field: 'salida', headerName: 'Fecha de salida' },
    { field: 'pasajeros', headerName: 'Pasajeros' },
    { field: 'estado', headerName: 'Estado' }
];

const rows = [
    { id: 1, origen: 'BOG', destino: 'EDH', salida: '12/30/2024', pasajeros: 2, estado: 'Pagado', color: 'green' },
    { id: 2, origen: 'MAD', destino: 'BOG', salida: '11/30/2024', pasajeros: 3, estado: 'Pendiente', color: 'blue' },
    { id: 3, origen: 'JFK', destino: 'LHR', salida: '12/29/2024', pasajeros: 2, estado: 'Cancelado', color: 'red' },
    { id: 4, origen: 'LAX', destino: 'LTN', salida: '11/25/2024', pasajeros: 5, estado: 'CheckIn', color: 'orange' },
    { id: 5, origen: 'MED', destino: 'MIA', salida: '11/10/2024', pasajeros: 1, estado: 'Pendiente', color: 'blue' }
]