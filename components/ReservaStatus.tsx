import React from 'react';

type ReservaStatusProps = {
    status: 'Payed' | 'Pending' | 'Canceled' | 'CheckIn';
};

const ReservaStatus = ({ status }: { status: string }) => {
    let color = '';

    switch (status) {
        case "Payed":
            color = 'green';
            break;
        case "Pending":
            color = 'orange';
            break;
        case "Canceled":
            color = 'red';
            break;
        case "CheckIn":
            color = '#2196F3';
            break;
        default:
            color = 'green';
            break;
    }

    return (
        <label style={{ backgroundColor: color }} className="flex flex-row justify-center items-center w-auto h-12 rounded-xl shadow-lg px-5 text-white font-semibold">
            {status}
        </label>
    );
};

export default ReservaStatus;