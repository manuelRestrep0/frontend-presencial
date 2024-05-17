import React from 'react';

interface FormButtonProps {
    type: 'button' | 'submit' | 'reset';
    text: string;
    color: string;
    icon: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ type, text, color, icon }) => {
    return (
        <section className='flex flex-row w-10/12 h-auto items-center justify-center p-3 mb-1'>
            <button type={type} className='w-40 h-12 flex flex-row p-3 justify-center items-center rounded-xl text-white font-bold shadow-lg'
                style={{ backgroundColor: color }} // Aplicando el color como estilo en línea
            >
                {text} {icon}
            </button>
        </section>
    );
};

export default FormButton;