import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    title: string;
    options: Option[];
}

const Select: React.FC<SelectProps> = ({ title, options }) => {
    return (
        <div className="relative">
            <select id="select" name="select" className="block appearance-none w-full bg-gray-100 border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="" disabled defaultValue={title}>{title}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 12L6 8h8l-4 4z"/>
                </svg>
            </div>
        </div>
    );
}

export default Select;
