import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

interface Props {
    viewInfo: boolean;
    handleViewInfo: () => void;
    name: string;
    passanger: string;

}

const FormTitles: React.FC<Props> = ({ viewInfo, handleViewInfo, name, passanger }) => {

    return (
        <div className='flex flex-row justify-between items-center w-full h-16 px-5'>
            <label className='flex flex-row w-1/3 justify-start text-xl font-semibold'>{name}</label>
            <label className='flex flex-row w-1/3 justify-start text-base font-thin'>{passanger}</label>
            {viewInfo ? (
                <KeyboardArrowUpIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewInfo} />
            ) : (
                <KeyboardArrowDownIcon className='rounded-full hover:bg-gray-200 w-10 h-10 cursor-pointer' onClick={handleViewInfo} />
            )}
        </div>
    );
};

export default FormTitles;