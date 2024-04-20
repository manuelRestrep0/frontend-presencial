export interface Payment {
    cardNumber: string,
    cardHolderName: string,
    expirationDate: string,
    cvv: 0,
    phone: string,
    idNumber: 0,
    bookingId: 0
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
    id: number,
    name: string,
}

