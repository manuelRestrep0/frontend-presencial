'use client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, Button, Card, CardContent, Grid, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [viewFly, setViewFly] = useState(false);
    const handleViewFly = () => {
        setViewFly(!viewFly);
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [viewInfo, setViewInfo] = useState(false);
    const handleViewInfo = () => {
        setViewInfo(!viewInfo);
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [viewEmerg, setViewEmerg] = useState(false);
    const handleViewEmerg = () => {
        setViewEmerg(!viewEmerg);
    }
    return (
        <div className="flex flex-col items-center justify-start w-screen h-auto">
            <nav className="flex flex-row w-screen h-16 justify-between items-center bg-[#2196F3]">
                <MenuIcon className='w-12 h-12 ml-5 cursor-pointer text-white' />
                <h1 className="text-center text-white text-2xl font-bold">
                    Reservar
                </h1>
                <AccountCircleIcon className='w-12 h-12 mr-5 cursor-pointer text-white' />
            </nav>
            <section className='flex flex-row justify-between items-center h-auto w-10/12 p-3 mt-20 '>
                <button className='flex flex-row justify-center items-center w-12 h-12 bg-[#2196F3] rounded-full shadow-lg'>
                    <EditIcon className='text-white' />
                </button>
                <button className='flex flex-row justify-center items-center w-auto h-12 bg-[#ffac38] rounded-xl shadow-lg px-5 text-white font-semibold '>
                    Equipaje
                    <WorkRoundedIcon className='text-white ml-2' />
                </button>
                <button className='flex flex-row justify-center items-center w-auto h-12 bg-[#2196F3] rounded-xl shadow-lg px-5 text-white font-semibold '>
                    Pagar
                    <CreditCardRoundedIcon className='text-white ml-2' />
                </button>
                <button className='flex flex-row justify-center items-center w-auto h-12 bg-[#248d37] rounded-xl shadow-lg px-5 text-white font-semibold '>
                    Asientos
                    <PeopleRoundedIcon className='text-white ml-2' />
                </button>
                <label>
                    Pendiente
                </label>
            </section>
            <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10'>
                <div className='flex flex-row justify-between items-center w-full h-16 px-5'>
                    <label className='flex flex-row w-1/3 justify-start text-xl font-semibold '>El vuelo</label>
                    {viewFly ? <KeyboardArrowUpIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewFly} /> : <KeyboardArrowDownIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewFly} />}
                </div>
                {viewFly && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Información de vuelo</h1>}
                {viewFly && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Identificador de vuelo</label> MEM864 </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Tipo </label> Internacional </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Ciudad origen </label> Medellín  </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Ciudad destino</label> Miamí </li>
                </ul >}
                {viewFly && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5 mt-5'> Horarios de salida y llegada</h1>}
                {viewFly && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Fecha de salida</label> 11/10/2024 </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Fecha de llegada </label> 11/10/2024 </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Hora de salida </label> 12:10  </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}> <label> Hora de llegada </label> 15:30 </li>
                </ul>}
            </section>
            <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10'>
                <div className='flex flex-row justify-between items-center w-full h-16 px-5'>
                    <label className='flex flex-row w-1/3 justify-start text-xl font-semibold '>Información</label>
                    <label className='flex flex-row w-1/3 justify-start text-base font-thin '>Pasajero Principal</label>
                    {viewInfo ? <KeyboardArrowUpIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewInfo} /> : <KeyboardArrowDownIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewInfo} />}                </div>
                {viewInfo && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Información básica</h1>}
                {viewInfo && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Nombres </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="Vladimir" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Apellidos </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="Guitierrez Fernandez" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Fecha de nacimiento </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="03/28/1970" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Telefono </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="(+55) 555 555 55 55" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Email </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="vladimirgf@gmail.com" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Genero </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="Masculino" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Tipo de documento </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="Cedula " />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Documento </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="111111111" />
                    </li>
                </ul>}
            </section>
            <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10 mb-5'>
                <div className='flex flex-row justify-between items-center w-full h-16 px-5'>
                    <label className='flex flex-row w-1/3 justify-start text-xl font-semibold '>Información de emergencia</label>
                    <label className='flex flex-row w-1/3 justify-start text-base font-thin '>Pasajero principal</label>
                    {viewEmerg ? <KeyboardArrowUpIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewEmerg} /> : <KeyboardArrowDownIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewEmerg} />}                </div>
                {viewEmerg && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Contacto de emergencia</h1>}
                {viewEmerg && <p className='flex flex-row justify-start items-center h-10 w-full px-5'>Este se usará si ocurre alguna emergencia con el pasajero principal.</p>}
                {viewEmerg && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-auto text-gray-400' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Nombres </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400' value="John Alfredo" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto text-gray-400' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Apellidos </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400' value="Valderrama Piñuela" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto text-gray-400' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Telefono </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400' value="(+57) 777 777 77 77" />
                    </li>
                    <li className='flex flex-row justify-start items-center h-20 ' style={{ width: "49%" }}>
                        <p className='w-auto text-gray-400 mt-7'>
                            Para todos los pasajeros
                        </p>
                        <input
                            // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
                            className="mt-7 ml-5 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-200 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-400 after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault02"
                            checked />
                    </li>
                </ul>}
                {viewEmerg && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Perdida de maletas</h1>}
                {viewEmerg && <p className='flex flex-row justify-start items-center h-10 w-full px-5'>Se llevará el equipaje a ladirección que ingrese en caso de perdida.</p>}
                {viewEmerg && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Dirección </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value="Cll 44 #44-44" />
                    </li>
                </ul>}
            </section>
            <section className='flex flex-row w-10/12 h-auto items-center justify-center p-3 mb-20'>
                <button className='w-40 h-12 flex flex-row p-3 justify-center items-center bg-gray-400 rounded-xl text-white font-bold'>Guardar <SaveAltIcon className='text-white ml-2' /></button>
            </section>
        </div >
    );
};

export default page;