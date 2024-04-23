'use client';
import React, { useState } from 'react';
import FlightForm from '@components/organisms/forms/flightForm';
import NavBar from '@components/organisms/navbar/nav';
import SideBar from '@components/organisms/sidebar/sidebar';
import SearchPage from '@components/organisms/searchForm/searchpage';

export default function Web() {
  const [showFlightForm, setShowFlightForm] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);

  const toggleFlightForm = () => {
    setShowFlightForm(!showFlightForm);
    setShowSearchPage(false); // Asegurarse de que solo se muestre un componente a la vez
  };

  const toggleSearchPage = () => {
    setShowSearchPage(!showSearchPage);
    setShowFlightForm(false); // Asegurarse de que solo se muestre un componente a la vez
  };

  return(
  
    <main>
      <NavBar />
      <section className='flex'>
          <SideBar toggleFlightForm={toggleFlightForm} toggleSearchPage={toggleSearchPage} />
      {showFlightForm && <FlightForm />}
      {showSearchPage && <SearchPage />}

          
      </section>
    </main>



  );
  
};
