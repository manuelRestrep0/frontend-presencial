"use client";
import React from 'react';
import { flightService } from 'app/api/ServiceAssembler';
import { Flight } from 'app/api/types';
import FloatingActionButtonExtendedSize from 'components/Button/FloatingButtons';
import ContentForm from 'components/Content/Form';
import ImagesRow from 'components/Content/ImagesRow';
import ButtonAppBar from 'components/NavigationBar/TopBar';
const trips = [
  { cityFrom: 'Medellín', cityTo: 'Bogotá', date: '24 Dic' },
  { cityFrom: 'London', cityTo: 'New York', date: '29 Feb' },
  { cityFrom: 'Madrid', cityTo: 'Moscow', date: '1 Jan' },
  { cityFrom: 'London', cityTo: 'City', date: 'City Date' },
];
const ListaVuelos: React.FC = () => {
  const [vuelos, setVuelos] = React.useState<Array<Flight>>([])
  React.useEffect(() => {
	flightService.all().then(response => 
		setVuelos(response.data)
	)
  }, [])
  return (
    <div>
      <ButtonAppBar/>
      <ContentForm/>
	  {vuelos.map(flight => 
		<div key={flight.flightId}>{JSON.stringify(flight)}</div>
	  )}
      <div style={{marginLeft:'20%', marginTop:'3%',  zIndex: 'auto'}}>
        <div style={{ display: 'flex' }}>
        {trips.map((trip, index) => (
          <FloatingActionButtonExtendedSize key={index} {...trip} />
        ))}
      </div>
        <p>
          <label htmlFor="select" className="inline-block text-gray-700 font-bold mb-2 mr-2" style={{ fontSize: '3em' }}>Trending</label>
          <label htmlFor="select" className="inline-block text-blue-700 font-bold mb-2 mr-2" style={{ fontSize: '3em' }}>Destination</label>
          <label htmlFor="select" className="inline-block text-gray-700 font-bold mb-2" style={{ fontSize: '3em' }}>Now Days</label>
        </p>
        <p className="text-gray-400 font-bold">Este es el contenido de la página 1.</p>

      </div>
      <div style={{ display: 'ruby-text', margin: '3%' }}>
        <ImagesRow />
      </div>
    </div>
  );
}



export default ListaVuelos;

