'use client'
import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface FormSelectProps {
    label: string;
    identity: string;
    name: string;
    options: Option[];
}

const FormSelect: React.FC<FormSelectProps> = ({ label, identity, name, options }) => {
    return (
        <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
            <label htmlFor={identity} className='flex flex-row w-full my-2 justify-start items-center h-4'>{label}</label>
            <select
                className='flex flex-col w-full h-16 rounded-xl border p-3'
                required
                name={name}
                id={identity}
            >
                <option value=''>Seleccione una opción</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </li>
    );
};

export default FormSelect;