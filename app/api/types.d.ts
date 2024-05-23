export interface Airport {
	airportCode: String,
	name: String,
	type: String,
	city: String,
	country: String,
	runways: number	
}

export interface Flight {
	flightId: number,
	flightNumber: String,
	basePrice:number,
	taxPercent: number,
	surcharge: number,
	scaleNumber: number,
	originAirport: Airport,
	destinationAirport: Airport,
	departureDate: String,
	arrivalDate: String,
}

export interface Scale {
    scaleId: number,
    flightId: number,
    airplaneModel: String,
    originAirport: String,
    destinationAirport: String,
    departureDate: String,
    arrivalDate: String
}

export interface Airplane {
	airplaneModel: String,
	family: String,
	capacity: number,
	cargoCapacity: number,
	volumeCapacity: number
}