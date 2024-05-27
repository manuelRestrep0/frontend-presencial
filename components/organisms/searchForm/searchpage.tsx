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
        console.log('Editar vuelo con ID:', flightNumber);
      };
    
      const handleDelete = async (flightNumber: string) => {
        // Eliminar el prefijo "SA" del número de vuelo
        const flightNumberWithoutPrefix = flightNumber.substring(2);
    
        try {
            // Verificar si el vuelo tiene reservas
            const response = await axios.get(`https://codefact.udea.edu.co/modulo-18/api/v1/flights/has-bookings/${flightNumberWithoutPrefix}`);
    
            if (response.data && response.data.hasBookings) {
                // Si el vuelo tiene reservas, mostrar un mensaje al usuario y no permitir la eliminación
                const errorMessage = `El vuelo con número ${flightNumber} tiene reservas y no puede ser eliminado.`;
                console.log(errorMessage);
                alert(errorMessage);
            } else {
                // Si el vuelo no tiene reservas, proceder con la eliminación
                await axios.delete(`https://codefact.udea.edu.co/modulo-18/api/v1/flights/${flightNumber}`);
                console.log(`Vuelo con ID ${flightNumber} eliminado exitosamente`);
                const confirmMessage = `Vuelo con ID ${flightNumber} eliminado exitosamente. La página se recargará para reflejar los cambios.`;
                if (window.confirm(confirmMessage)) {
                    // Recargar la página después de que el usuario acepte el mensaje
                    window.location.reload();
                }
            }
        } catch (error) {
            // Si hay un error en la petición, verificar si es debido a que el vuelo tiene reservas
            
                // Mostrar el mensaje de error al usuario
                const errorMessage = `El vuelo con número ${flightNumber} tiene reservas y no puede ser eliminado.`;
                console.error(errorMessage);
                alert(errorMessage);
            
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
