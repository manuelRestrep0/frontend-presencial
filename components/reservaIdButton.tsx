import React from 'react';

export interface ButtonProps {
    className: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    link?: string; // New property for the button link
}

const ReservaIdButton: React.FC<ButtonProps> = ({ className, children, icon, link }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank'); // Open the link in a new tab
        }
    };

    return (
        <button className={className} onClick={handleClick}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default ReservaIdButton;