export type passengerType = {
    passengerId: number;
    personId: number;
    bookingId: number;
}

export type bookingType = {
    bookingId: number;
    flightId: number;
    bookingDate: string;
    bookingStatus: string;
    totalPrice: number;
}

export type personType = {
    personId: number;
    idType: number;
    idNumber: number;
    firstName: string;
    lastName: string;
    genre: string;
    birthDate: string;
    phoneNumber: string;
    country: string;
    province: string;
    city: string;
    residence: string;
    email: string;
    password: string;
}  