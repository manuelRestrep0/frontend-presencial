export type identificationType = {
    identificationTypeId: number;
    identificationTypeName: string;
}  

export type personType = {
    personId: number;
    identificationType: identificationType;
    idNumber: string;
    firstName: string;
    lastName: string;
    genre: string;
    birthDate: string;
    phoneNumber: string;
    country: string;
    province: string;
    city: string;
    address: string;
    email: string;
}  

export type passengerType = {
    passengerId: number;
    personId: number;
    bookingId: number;
}

export type bookingPassengerType = {
    bookingPassengerId: number;
    booking: bookingType;
    passenger: passengerType;
}

export type bookingType = {
    bookingId: number;
    flightId: number;
    bookingDate: string;
    bookingStatus: string;
    totalPrice: number;
}

export type loginData = {
    email: string;
    expiresAt: string;
    token: string;
}