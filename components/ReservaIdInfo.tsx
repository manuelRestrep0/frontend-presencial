import React from 'react';

type ReservaIdInfoProps = {
    p: {
        firstName: string;
        lastName: string;
        birthDate: string;
        phoneNumber: string;
        email: string;
        genre: string;
        idType: number;
        idNumber: number;
    };
};

const ReservaIdInfo = ({ p }: ReservaIdInfoProps) => {
    return (
        <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Nombres </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.firstName} readOnly />
            </li>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Apellidos </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.lastName} readOnly />
            </li>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Fecha de nacimiento </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.birthDate} readOnly />
            </li>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Telefono </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.phoneNumber} readOnly />
            </li>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Email </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.email} readOnly />
            </li>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Genero </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.genre} readOnly />
            </li>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Tipo de documento </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.idType} readOnly />
            </li>
            <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
                <label className='flex flex-row w-full my-2 justify-start items-center h-4 text-gray-400'> Documento </label>
                <input type="text" className='flex flex-col w-full h-16 rounded-xl border p-3 text-gray-400 ' value={p.idNumber} readOnly />
            </li>
        </ul>
    );
};

export default ReservaIdInfo;