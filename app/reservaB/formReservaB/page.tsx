'use client'
import { Box, Button, Card, CardContent, Grid, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const FormReserve = () => {
    const [viewFly, setViewFly] = useState(false);
    const handleViewFly = () => {
        setViewFly(!viewFly);
    }
    const [viewInfo, setViewInfo] = useState(false);
    const handleViewInfo = () => {
        setViewInfo(!viewInfo);
    }
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
            <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10'>
                <div className='flex flex-row justify-between items-center w-full h-16 px-5'>
                    <label>El vuelo</label>
                    {viewFly ? <KeyboardArrowUpIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewFly}/> : <KeyboardArrowDownIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewFly}/>}
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
                    <label>Información</label>
                    <label>Pasajero Principal</label>
                    {viewInfo ? <KeyboardArrowUpIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewInfo}/> : <KeyboardArrowDownIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewInfo}/>}                </div>
                {viewInfo && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-8'>Información básica</h1>}
                {viewInfo && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Nombres </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="Vladimir" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Apellidos </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="Guitierrez Fernandez" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Fecha de nacimiento </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="03/28/1970" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Telefono </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="(+55) 555 555 55 55" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Email </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="vladimirgf@gmail.com" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Genero </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="Masculino" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Tipo de documento </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="Cedula " />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Documento </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="111111111" />
                    </li>
                </ul>}
            </section>
            <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10 mb-5'>
                <div className='flex flex-row justify-between items-center w-full h-16 px-5'>
                    <label>Información de emergencia</label>
                    <label>Pasajero principal</label>
                    {viewEmerg ? <KeyboardArrowUpIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewEmerg}/> : <KeyboardArrowDownIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewEmerg}/>}                </div>
                {viewEmerg && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-8'>Contacto de emergencia</h1>}
                {viewEmerg && <p className='flex flex-row justify-start items-center h-10 w-full px-8'>Este se usará si ocurre alguna emergencia con el pasajero principal.</p>}
                {viewEmerg && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Nombres </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="John Alfredo" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Apellidos </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="Valderrama Piñuela" />
                    </li>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Telefono </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="(+57) 777 777 77 77" />
                    </li>
                    <li className='flex flex-row justify-start items-center h-20 p-3' style={{ width: "49%" }}>
                        <p className='w-auto'>
                            Para todos los pasajeros
                        </p>
                        <input
                            className="mt-2 ml-5 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[#68b1ec] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-[#2196F3] after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault02"
                            checked />
                    </li>
                </ul>}
                {viewEmerg && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-8'>Perdida de maletas</h1>}
                {viewEmerg && <p className='flex flex-row justify-start items-center h-10 w-full px-8'>Se llevará el equipaje a ladirección que ingrese en caso de perdida.</p>}
                {viewEmerg && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-auto p-3' style={{ width: "49%" }}>
                        <label className='flex flex-row w-full my-2 justify-start items-center h-4'> Dirección </label>
                        <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 ' value="Cll 44 #44-44" />
                    </li>
                </ul>}
            </section>
            <section className='flex flex-row w-10/12 h-auto items-center justify-start p-3 mb-3'>
                <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-auto mr-5'> Agregar pasajero </h1>
                <AddCircleIcon className='text-[#2196F3] w-12 h-12 cursor-pointer' />
            </section>
            <section className='flex flex-row w-10/12 h-auto items-center justify-center p-3 mb-20'>
                <button className='w-40 h-12 flex flex-row p-3 justify-center items-center bg-[#2196F3] rounded-xl text-white font-bold'>Guardar <SaveAltIcon className='text-white ml-2'/></button>
            </section>
        </div >
    );
};

export default FormReserve;