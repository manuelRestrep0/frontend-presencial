import React from 'react';
import Image from 'next/image';
import UserInfo from '@components/molecules/user';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-xl w-full sticky top-0 mb-8">
      <div className="flex items-center justify-between h-16 mx-3">
        <div className="flex items-center">
          <div className="mr-2">
            <Image src="/Logo.png" alt="logo" width={60} height={60} />
          </div>
          <div className="text-5xl">Singapur Airlines</div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <UserInfo />
          </div>
          <div>
            <Image src="/logout.png" alt="logoOut" width={60} height={60} />
          </div>
        </div>
      </div>
    </nav>
  );
}

