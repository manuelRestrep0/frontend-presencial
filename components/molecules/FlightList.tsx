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
                const response = await fetch('https://codefact.udea.edu.co/modulo-19/v1/flights/searchsflights');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json() as Flight[];
                setFlights(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(`Error fetching flights: ${error.message}`);
                    console.error('Error fetching flights:', error);
                } else {
                    setError('An unknown error occurred');
                    console.error('An unknown error occurred:', error);
                }
            }
        };

        fetchFlights();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <table className='ml-10'>
                <thead>
                    <tr className='border-b border-gray-300'>
                        <th className='py-4 font-semibold text-lg pr-6'>No. Vuelo</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Tipo de vuelo</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Origen</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Destino</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Fecha de salida</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Hora de salida</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Fecha de llegada</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Hora de llegada</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Ver más</th>
                        <th className='py-4 font-semibold text-lg pr-6'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight, index) => (
                        flight.scales.length > 0 ? flight.scales.map((scale, scaleIndex) => (
                            <tr key={`${flight.id}-${scale.scaleId}-${scaleIndex}`} className='border-b border-gray-300'>
                                <td className='py-4 pr-10'>{flight.flightNumber}</td>
                                <td className='py-4 pr-10'>{flight.flightType}</td>
                                <td className='py-4 pr-10'>{scale.originAirport.name}</td>
                                <td className='py-4 pr-10'>{scale.destinationAirport.name}</td>
                                <td className='py-4 pr-10'>{new Date(scale.departureDate).toLocaleDateString()}</td>
                                <td className='py-4 pr-10'>{new Date(scale.departureDate).toLocaleTimeString()}</td>
                                <td className='py-4 pr-10'>{new Date(scale.arrivalDate).toLocaleDateString()}</td>
                                <td className='py-4 pr-10'>{new Date(scale.arrivalDate).toLocaleTimeString()}</td>
                                <td className='py-4 pr-6'>Ver más</td>
                                <td className='py-4 pr-6'>Eliminar</td>
                            </tr>
                        )) : (
                            <tr key={flight.id} className='border-b border-gray-300'>
                                <td className='py-4 pr-10'>{flight.flightNumber}</td>
                                <td className='py-4 pr-10'>{flight.flightType}</td>
                                <td colSpan={8} className='py-4 text-center'>Sin escalas</td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default FlightList;