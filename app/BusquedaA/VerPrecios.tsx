/* eslint-disable @next/next/no-page-custom-font */

import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import '/styles/styles.css';

interface Flight {
    id: number;
    hora_ida: string;
    hora_vuelta: string;
    precio: number;
}

const VerPrecios: NextPage = () => {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [showPrices] = useState(true); // Cambiado para mostrar precios por defecto

    useEffect(() => {
        fetch('https://65f0ba68da8c6584131c57f7.mockapi.io/api/city/flights')
            .then(response => response.json() as Promise<Flight[]>)
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching flights:', error));
    }, []);

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional" />
            {showPrices && (
                <div className="flight-header-container">
                    <div className="flight-header">
                        <div className="special-logo-container">
                            <div className="flight-header-filter">
                                <span className="material-symbols-outlined">flight_takeoff</span>
                            </div>
                            <div className="flight-header-text">
                                Viaje de Medellín a Bogotá - Dom, Mar 14, 2024
                            </div>
                        </div>
                        <div className="flight-header-filter">
                            <span className="material-symbols-outlined">filter_alt</span>
                            <span>Recomendado:</span>
                            <button className="filter-button">Vuelos directos</button>
                            <button className="filter-button">Mejor precio</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container">
                {/* Aquí van los vuelos y precios en lugar de los campos de búsqueda */}
                {flights.map((flight, index) => (
                    <div key={index} className="flight-option" style={{ marginBottom: '20px' }}>
                        <div className="best-price">MEJOR PRECIO</div>
                        <div>
                            <div className="departure-time">{flight.hora_ida}</div>
                            <div className="airport-codes">BOG</div>
                        </div>
                        <div className="flight-separator">
                            <div className="flight-separator.left"></div>
                        </div>
                        <div className="separator-div">
                            <span className="material-symbols-outlined">flight_takeoff</span>
                        </div>
                        <div className="flight-separator">
                            <div className="flight-separator.left"></div>
                        </div>
                        <div>
                            <div className="arrival-time">{flight.hora_vuelta}</div>
                            <div className="airport-codes">MDE</div>
                        </div>
                        <div>
                            <div className="price"><div className="left-border"></div>
                                {flight.precio} COP
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Espacio adicional para separar los componentes */}
            <div style={{ height: '50px' }} />
        </div>
    );
};

export default VerPrecios;