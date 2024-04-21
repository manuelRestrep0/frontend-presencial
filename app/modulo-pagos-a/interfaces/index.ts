export interface Payment {
    cardNumber: string,
    cardHolderName: string,
    expirationDate: string,
    cvv: number,
    phone: string,
    idNumber: number,
    bookingId?: number
}

export interface PaypalType {
    email: string,
    password: string,
    bookingId?: number
}

export interface BookingInfo {
    bookingId: number,
    passengerId: number,
    flightId: number,
    bookingDate: string,
    basePrice: number,
    tax: number,
    totalPrice: number,
    paid: boolean
}

export interface PaymentMethod {
    id: string,
    name: string,
}

export interface PassengerInfo {
    name: string,
    seat: string,
}
