import React, { useState } from 'react';
import FormTitles from './formTitles';

interface Info {
    identificador: string;
    tipo: string;
    ciudadOrigen: string;
    ciudadDestino: string;
    fechaSalida: string;
    fechaLlegada: string;
    horaSalida: string;
    horaLlegada: string;
}

const FormFly: React.FC = () => {
    const [viewFly, setViewFly] = useState(false);
    const info: Info[] = [
        {
            identificador: "MEM864",
            tipo: "Internacional",
            ciudadOrigen: "Medellín",
            ciudadDestino: "Miami",
            fechaSalida: "11/10/2024",
            fechaLlegada: "11/10/2024",
            horaSalida: "12:10",
            horaLlegada: "15:30"
        }
    ]; // Replace with your data source

    const handleViewFly = () => {
        setViewFly(!viewFly);
    };

    return (
        <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10 pb-5'>
            <FormTitles viewInfo={viewFly} handleViewInfo={handleViewFly} name={'Vuelo'} passanger={'Pasajero principal'} />
            {viewFly && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Información de vuelo</h1>}
            {viewFly && (
                <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Identificador de vuelo </label> {info[0]?.identificador}
                    </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Tipo </label> {info[0]?.tipo}
                    </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Ciudad origen </label> {info[0]?.ciudadOrigen}
                    </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Ciudad destino</label> {info[0]?.ciudadDestino}
                    </li>
                </ul>
            )}
            {viewFly && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5 mt-5'> Horarios de salida y llegada</h1>}
            {viewFly && (
                <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Fecha de salida</label> {info[0]?.fechaSalida}
                    </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Fecha de llegada </label> {info[0]?.fechaLlegada}
                    </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200 p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Hora de salida </label> {info[0]?.horaSalida}
                    </li>
                    <li className='flex flex-col justify-start items-start h-16 bg-gray-200r p-3 my-3 rounded-xl' style={{ width: "49%" }}>
                        <label className='text-xs'> Hora de llegada </label> {info[0]?.horaLlegada}
                    </li>
                </ul>
            )}
        </section>
    );
};

export default FormFly;