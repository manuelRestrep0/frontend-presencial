import { Payment, PaymentMethod } from "../interfaces";

const API_URL = 'http://localhost:3000';

export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
    try {
        const response = await fetch(`${API_URL}/api/payments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching payment methods');
        }
        const data = await response.json();
        return data as PaymentMethod[];
    } catch (error) {
        console.error('Error fetching payment methods:', error);
        throw error;
    }
}

export const postPayment = async (data: Payment) => {
    return await fetch(`${API_URL}/api/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}