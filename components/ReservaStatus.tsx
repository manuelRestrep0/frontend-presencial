import React from 'react';

type ReservaStateProps = {
    estado: 'Pendiente' | 'Check-in' | 'Pagado' | 'Cancelado';
};

const ReservaStatus: React.FC<ReservaStateProps> = ({ estado }) => {
    let color = '';

    switch (estado) {
        case 'Pendiente':
            color = 'blue';
            break;
        case 'Check-in':
            color = 'green';
            break;
        case 'Pagado':
            color = 'purple';
            break;
        case 'Cancelado':
            color = 'red';
            break;
        default:
            color = 'black';
            break;
    }

    return (
        <label style={{ color }}>
            {estado}
        </label>
    );
};

export default ReservaStatus;