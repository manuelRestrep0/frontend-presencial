import { BookingInfo } from "../interfaces";

const API_URL = 'https://codefact.udea.edu.co'

export const getPaymentMethods = async (bookingId: number): Promise<BookingInfo[]> => {
    try {
        const response = await fetch(`${API_URL}/bookings/${bookingId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching payment methods');
        }
        const data = await response.json();
        return data as BookingInfo[];
    } catch (error) {
        console.error('Error fetching payment methods:', error);
        throw error;
    }
}