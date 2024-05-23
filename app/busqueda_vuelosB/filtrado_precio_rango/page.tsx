"use client";
import React, { useEffect, useState } from 'react';
import ButtonAppBar from 'components/NavigationBar/TopBar';
import { Flight } from 'app/api/types';
import { flightService } from 'app/api/ServiceAssembler';
import FlightDetails from 'components/Content/FlightDetailsForm';
import BestResults from 'components/Content/BestResults';
import Results from 'components/Content/Results';
import FiltersColumn from 'components/Content/FiltersColumn';
import { Card, CardContent } from '@mui/material';

function FiltroPrecioRango() {
	
	const[minPrice, setMinPrice] = useState<number>(Number.NEGATIVE_INFINITY)
	const[maxPrice, setMaxPrice] = useState<number>(Number.POSITIVE_INFINITY)
	const [flights, setFlights] = useState<Array<Flight>>([]);

	useEffect(() => {
		let query: string = ""
		// TODO: Logica para que ponga ampersand solo si el string no esta vacio

		if(minPrice >= 0) query +=  `min-price=${minPrice}`
		if(maxPrice !== Number.POSITIVE_INFINITY) query +=  `max-price=${minPrice}`
		flightService.searchBy(query).then(response => {
			return response.data
		}).then(data => setFlights(data))
	  }, [minPrice, maxPrice])

    return (
        <body style={{ margin: 0 }}>
            <header><ButtonAppBar/></header>

            <div style={{ display: 'flex' }}>

                <div><FiltersColumn setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/></div>

                <main style={{ flex: 1 }}>
                    {/* Contenedor principal */}
                    <div><FlightDetails/></div>
                    <div><BestResults/></div>
                    <div><Results/></div>
                </main>
            </div>
			<div>
			{flights.map(flight => {
				return <div key={flight.flightId}>
					<Card>
						<CardContent>
							<h2>
								{flight.destinationAirport.city}
							</h2>
							{flight.originAirport.city} - {flight.destinationAirport.city}
							<p>
								{new Date(Date.parse(flight.arrivalDate.toString())).toDateString()}
							</p>
						</CardContent>
					</Card>
				</div>
			})}
			</div>
        </body>
    );
}

export default FiltroPrecioRango;