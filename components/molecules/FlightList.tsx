"use client";
import React, { useEffect, useState } from 'react';

interface AirplaneModel {
    id: string;
    family: string;
    capacity: number;
    cargoCapacity: number;
}

interface Airport {
    id: string;
    name: string;
    type: string;
    city: string;
    country: string;
    runways: number;
}

interface Scale {
    scaleId: number;
    airplaneModel: AirplaneModel;
    originAirport: Airport;
    destinationAirport: Airport;
    departureDate: string;
    arrivalDate: string;
}

interface Flight {
    id: number;
    flightNumber: string;
    basePrice: number;
    taxPercentage: number;
    surcharge: number;
    scales: Scale[];
    flightType: string | null;
}

function FlightList() {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch('https://codefact.udea.edu.co/modulo-19/v1/flights/searchFlights');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json() as Flight[];
                setFlights(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(`Error fetching flights: ${error.message}`);
                    console.error('Error fetching flights:', error.message, error.stack);
                } else {
                    setError('An unknown error occurred');
                    console.error('An unknown error occurred:', error);
                }
            }
        };

        fetchFlights();
    }, []);

    const deleteFlight = async (id: number) => {
        try {
            const response = await fetch(`https://codefact.udea.edu.co/modulo-19/v1/flights/delete/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Remove the deleted flight from the state
            setFlights(flights.filter(flight => flight.id !== id));
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(`Error deleting flight: ${error.message}`);
                console.error('Error deleting flight:', error.message, error.stack);
            } else {
                setError('An unknown error occurred');
                console.error('An unknown error occurred:', error);
            }
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <table className='ml-10'>
                <thead>
                    <tr className='border-gray-300 border-b'>
                        <th className='py-4 pr-6 font-semibold text-lg'>No. Vuelo</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Tipo de vuelo</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Origen</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Destino</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Fecha de salida</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Hora de salida</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Fecha de llegada</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Hora de llegada</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Ver más</th>
                        <th className='py-4 pr-6 font-semibold text-lg'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight, index) => (
                        flight.scales.length > 0 ? flight.scales.map((scale, scaleIndex) => (
                            <tr key={`${flight.id}-${scale.scaleId}-${scaleIndex}`} className='border-gray-300 border-b'>
                                <td className='py-4 pr-10'>{flight.flightNumber}</td>
                                <td className='py-4 pr-10'>{flight.flightType}</td>
                                <td className='py-4 pr-10'>{scale.originAirport.name}</td>
                                <td className='py-4 pr-10'>{scale.destinationAirport.name}</td>
                                <td className='py-4 pr-10'>{new Date(scale.departureDate).toLocaleDateString()}</td>
                                <td className='py-4 pr-10'>{new Date(scale.departureDate).toLocaleTimeString()}</td>
                                <td className='py-4 pr-10'>{new Date(scale.arrivalDate).toLocaleDateString()}</td>
                                <td className='py-4 pr-10'>{new Date(scale.arrivalDate).toLocaleTimeString()}</td>
                                <td className='py-4 pr-6'>Ver más</td>
                                <td className='py-4 pr-6'>
                                    <button onClick={() => deleteFlight(flight.id)} className='text-red-500'>Eliminar</button>
                                </td>
                            </tr>
                        )) : (
                            <tr key={flight.id} className='border-gray-300 border-b'>
                                <td className='py-4 pr-10'>{flight.flightNumber}</td>
                                <td className='py-4 pr-10'>{flight.flightType}</td>
                                <td colSpan={8} className='py-4 text-center'>Sin escalas</td>
                                <td className='py-4 pr-6'>
                                    <button onClick={() => deleteFlight(flight.id)} className='text-red-500'>Eliminar</button>
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default FlightList;
