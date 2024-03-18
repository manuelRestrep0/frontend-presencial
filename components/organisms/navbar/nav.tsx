import React from 'react';
import Image from 'next/image';
import UserInfo from '@components/molecules/user';
import { Subtitle } from '@components/atoms/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav className="bg-gray-300 shadow-xl w-full sticky top-0">
      <div className="flex items-center justify-between h-16 mx-3">
        <div className="flex items-center">
          <div className="mr-2">
            <FontAwesomeIcon icon={faPlane} className='h-12 w-24 text-primary'/>
          </div>

          <div className="text-5xl">
            <Subtitle subtitle="Singapur Airlines" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <UserInfo />
          </div>
          <div className='w-12 h-12'>
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-primary hover:text-secondary hover:shadow-lg cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

