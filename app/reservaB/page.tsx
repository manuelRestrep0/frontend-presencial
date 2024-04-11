'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';
import { redirect } from 'next/navigation';

//Página de reservas
export default function Reserva() {
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen max-h-screen">
            <nav className="flex flex-row w-screen h-16 justify-between items-center bg-[#2196F3]">
                <MenuIcon className='w-12 h-12 ml-5 cursor-pointer text-white' />
                <h1 className="text-center text-white text-2xl font-bold">
                    Reservas
                </h1>
                <AccountCircleIcon className='w-12 h-12 mr-5 cursor-pointer text-white' />
            </nav>
            <div className='flex flex-col justify-center items-center w-screen h-full'>
                <section className='flex flex-col justify-center items-start w-3/4 h-auto border rounded-2xl p-10'>
                    <section className="flex flex-col justify-center items-start w-full h-auto mb-3">
                        <h1 className='font-bold text-2xl mb-3'>Tus reservas</h1>
                        <p className='text-xl'>Aquí podrá ver las reservas realizadas y sus estados.</p>
                    </section>
                    <section className='flex flex-row justify-start items-center w-full h-auto mb-3'>
                        <input type="text" value="Origen, Identificador, etc..." className='flex flex-row h-12 w-80 px-3 border mr-6 rounded-xl' />
                        <select name="column" id="column" className='flex flex-row h-12 w-52 px-3 border mr-6 rounded-xl'>
                            <option defaultValue="any">Columna</option>
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
                            <tbody className='flex flex-col w-full justify-center items-center h-auto'>
                                {rows.map((r) => {
                                    return (
                                        <tr key={r.id} className='flex flex-row w-full justify-between items-center h-16 border-b hover:bg-gray-200'>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>{r.id}</td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                <LocationOnIcon />
                                                {r.origen}
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>
                                                <LocationOnIcon />
                                                {r.destino}
                                            </td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>{r.salida}</td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>{r.pasajeros}</td>
                                            <td className='flex flex-row justify-center items-center h-full' style={{ width: '12.5%' }}>{r.estado}</td>
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
    { id: 1, origen: 'BOG', destino: 'EDH', salida: '12/30/2024', pasajeros: 2, estado: 'Pagado' },
    { id: 2, origen: 'MAD', destino: 'BOG', salida: '11/30/2024', pasajeros: 3, estado: 'Pendiente' },
    { id: 3, origen: 'JFK', destino: 'LHR', salida: '12/29/2024', pasajeros: 2, estado: 'Cancelado' },
    { id: 4, origen: 'LAX', destino: 'LTN', salida: '11/25/2024', pasajeros: 5, estado: 'CheckIn' },
    { id: 5, origen: 'MED', destino: 'MIA', salida: '11/10/2024', pasajeros: 1, estado: 'Pendiente' }
]
