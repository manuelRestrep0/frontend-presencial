import { PassengerInfo } from "../interfaces";

const API_URL = 'https://codefact.udea.edu.co/modulo-20'

export const getBooking = async (bookingId: number): Promise<PassengerInfo> => {
    try {
        const response = await fetch(`${API_URL}/passengers/${bookingId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching passengers');
        }
        const data = await response.json();
        return data as PassengerInfo;
    } catch (error) {
        console.error('Error fetching passengers:', error);
        throw error;
    }
}

export const getListPassengers = async (): Promise<PassengerInfo[]> => {
    try {
        const response = await fetch(`${API_URL}/passengers/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching passengers');
        }
        const data = await response.json();
        return data as PassengerInfo[];
    } catch (error) {
        console.error('Error fetching passengers:', error);
        throw error;
    }
}