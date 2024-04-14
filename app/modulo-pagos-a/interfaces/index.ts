export interface Payment {
    cardNumber: string,
    cardHolderName: string,
    expirationDate: string,
    cvv: number,
    phone: string,
    idNumber: number
}

export interface BookingInfo {
    bookingId: number,
    passengerId: number,
    flightId: number,
    bookingDate: string,
    basePrice: number,
    tax: number,
    totalPrice: number
}

export interface PaymentMethod{
    id: number,
    name: string,
}

