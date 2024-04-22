'use client';
import React, { useState } from 'react';
import FlightForm from '@components/organisms/forms/flightForm';
import NavBar from '@components/organisms/navbar/nav';
import SideBar from '@components/organisms/sidebar/sidebar';

export default function Web() {
  const [showFlightForm, setShowFlightForm] = useState(false);
  const toggleFlightForm = () => {
    setShowFlightForm(!showFlightForm);
  };

  return(
  
    <main>
    <NavBar />
    <section className='flex'>
        <SideBar toggleFlightForm={toggleFlightForm} />
        {showFlightForm && <FlightForm />}
    </section>
</main>

  );
  
};
