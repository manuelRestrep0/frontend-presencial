'use client'

import React from 'react';

interface FormInputProps {
    label: string;
    identity: string;
    type: string;
    name: string;
    placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, identity, name, placeholder }) => {
    return (
        <li className='flex flex-col justify-start items-start h-auto' style={{ width: "49%" }}>
            <label className='flex flex-row w-full my-2 justify-start items-center h-4'>{label}</label>
            <input
                aria-label={name}
                className='flex flex-col w-full h-16 rounded-xl border p-3'
                type={type}
                required
                name={identity}
                id={name}
                placeholder={placeholder}
            />
        </li>
    );
};

export default FormInput;