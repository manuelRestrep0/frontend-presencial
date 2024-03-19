import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '@components/molecules/user';
import { Subtitle } from '@components/atoms/text';


export default function NavBar() {
  return (
    <nav className="bg-gray-300 shadow-xl w-full sticky top-0">
      <div className="flex items-center justify-between h-16 mx-3">
        <div className="flex items-center">
          <div className="mr-2">
        
            <img src="/logo.jpeg" className="w-[70px] h-[70px] rounded-full" alt="profile-pic" />
            
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

