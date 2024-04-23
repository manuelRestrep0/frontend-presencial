'use client'
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from '@components/organisms/searchbar/searchbar';
import FlightCard from '@components/organisms/searchForm/searchform';
import { Flight } from '@components/organisms/searchForm/searchform';
import { Subtitle } from '@components/atoms/text';

const SearchPage: React.FC = () => {
    
    const [flights, setFlights] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Realizar la petición GET para obtener los vuelos
        const fetchFlights = async () => {
          try {
            const response = await axios.get('https://codefact.udea.edu.co/modulo-18/api/v1/flights');
            setFlights(response.data);
            setSearchResults(response.data);
          } catch (error) {
            console.error('Error al obtener los vuelos:', error);
          }
        };
    
        fetchFlights();
      }, []);

      const handleSearchFlights = (query: string) => {
        // Filtrar los vuelos que coincidan con la búsqueda
        const results = flights.filter((flight: Flight) =>
            flight.flightNumber.includes(query)
        );
        setSearchResults(results);
      };

      const handleEdit = (flightNumber: string) => {
        // Lógica para editar el vuelo con el ID proporcionado
        console.log('Editar vuelo con ID:', flightNumber);
      };
    
      const handleDelete = async (flightNumber: string) => {
        // Buscar el vuelo por su flightNumber para obtener su ID
        const flightToDelete = flights.find((flight: Flight) => flight.flightNumber === flightNumber);
        
        if (flightToDelete) {
          const { flightNumber } = flightToDelete;
          try {
            // Realizar la petición DELETE para eliminar el vuelo
            await axios.delete(`https://codefact.udea.edu.co/modulo-18/api/v1/flights/${flightNumber}`);
            console.log(`Vuelo con ID ${flightNumber} eliminado exitosamente`);
            const confirmMessage = `Vuelo con ID ${flightNumber} eliminado exitosamente. La página se recargará para reflejar los cambios.`;
            if (window.confirm(confirmMessage)) {
        // Recargar la página después de que el usuario acepte el mensaje
                window.location.reload();
            }
          } catch (error) {
            console.error('Error al eliminar el vuelo:', error);
          }
        } else {
          console.log(`No se encontró ningún vuelo con el número de vuelo ${flightNumber}`);
        }
      };
      

      return (
        <div className="container mx-auto mt-8">
            
          <Subtitle subtitle="Búsqueda de Vuelos"></Subtitle>
          
          <SearchBar onSubmit={handleSearchFlights} />
          <div className="mt-8">
            {searchResults.map((flight: Flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      );
};

export default SearchPage;
