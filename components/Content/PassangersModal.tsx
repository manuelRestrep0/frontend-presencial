'use client';

import React, { useState } from 'react';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import CloseIcon from '@mui/icons-material/Close';

const PassengerSelect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handlePassengerChange = (type, value) => {
    setPassengers((prevPassengers) => ({
      ...prevPassengers,
      [type]: value,
    }));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div>
        <button
          className="bg-gray-100 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
          onClick={handleModalOpen}
        >
          {`${passengers.adults} Adult${passengers.adults !== 1 ? 's' : ''}, ${passengers.children} Child${
            passengers.children !== 1 ? 'ren' : ''
          }, ${passengers.infants} Infant${passengers.infants !== 1 ? 's' : ''}`}
        </button>
      </div>
      {isModalOpen && (
        <div className="absolute z-50 left-0 mt-2 bg-white rounded-lg p-6 shadow-lg">
          <div className="mb-4">
            <div className="flex items-center">
            <h2 className="text-lg font-bold">PASSENGERS</h2>
            <div style={{marginLeft: "50%"}}>
            <button
                className= "text-gray-800"
                onClick={handleModalClose}
                >
                <CloseIcon/>
                </button>
            </div>
            </div>
            <label htmlFor="adults" className="block mb-2">
              Adults (12+ years)
            </label>
            
            <div className="flex items-center">
                <EmojiPeopleIcon className="w-6 h-6 mr-2 text-gray-500" />
                <input
                    id="adults"
                    type="number"
                    min="0"
                    value={passengers.adults}
                    onChange={(e) => handlePassengerChange('adults', parseInt(e.target.value, 10))}
                    className="border border-gray-400 rounded px-3 py-2"
                />
            </div>
            
          </div>
          <div className="mb-4">
            <label htmlFor="children" className="block mb-2">
              Children (2-11 years)
            </label>
            <div className="flex items-center">
                <BoyIcon className="w-6 h-6 mr-2 text-gray-500" />
                <input
                id="children"
                type="number"
                min="0"
                value={passengers.children}
                onChange={(e) => handlePassengerChange('children', parseInt(e.target.value, 10))}
                className="border border-gray-400 rounded px-3 py-2"
                />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="infants" className="block mb-2">
              Infants (under 2 years)
            </label>
            <div className="flex items-center">
                <GirlIcon className="w-6 h-6 mr-2 text-gray-500" />
                <input
                id="infants"
                type="number"
                min="0"
                value={passengers.infants}
                onChange={(e) => handlePassengerChange('infants', parseInt(e.target.value, 10))}
                className="border border-gray-400 rounded px-3 py-2"
                />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              onClick={handleModalClose}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelect;