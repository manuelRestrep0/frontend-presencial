import React from 'react';

interface ButtonProps {
    className: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const ReservaIdButton: React.FC<ButtonProps> = ({ className, children, icon }) => {
    return (
        <button className={className}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};


export default ReservaIdButton;