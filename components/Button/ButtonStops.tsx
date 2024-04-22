import React from 'react';

interface ButtonStopProps {
    label: string;
}

const ButtonStop: React.FC<ButtonStopProps> = ({ label }) => {
    const style = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#2C7AD6',
        border: '1px solid #2C7AD6',
        borderRadius: '10px',
        padding: '8px 16px',
        cursor: 'pointer',
        marginRight: '10px'
    };

    return (
        <button type="button" style={style}>
            {label}
        </button>
    );
};

export default ButtonStop;

