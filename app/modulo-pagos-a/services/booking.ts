import { BookingInfo } from "../interfaces";

const API_URL = 'https://codefact.udea.edu.co/modulo-20'

export const getBooking = async (bookingId: number): Promise<BookingInfo> => {
    try {
        const response = await fetch(`${API_URL}/bookings/${bookingId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching bookings');
        }
        const data = await response.json();
        return data as BookingInfo;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
}

export const getListBookings = async (): Promise<BookingInfo[]> => {
    try {
        const response = await fetch(`${API_URL}/bookings/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching bookings');
        }
        const data = await response.json();
        return data as BookingInfo[];
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
}