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
    bookingId: 0,
    passengerId: 0,
    flightId: 0,
    bookingDate: string,
    basePrice: 0,
    tax: 0,
    totalPrice: 0,
    paid: true
}

export interface PaymentMethod {
    id: number,
    name: string,
}

