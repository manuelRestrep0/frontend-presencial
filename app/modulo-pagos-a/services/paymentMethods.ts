import { Payment, PaymentMethod } from "../interfaces";

const API_URL = 'https://g9spr1dj-8080.use2.devtunnels.ms/modulo-20'

export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
    try {
        const response = await fetch(`${API_URL}/paymentmethods/`, {
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
    try {
        const response = await fetch(`${API_URL}/paymentmethod/card/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Error posting payment');
        }
        return response.json();
    } catch (error) {
        console.error('Error posting payment:', error);
        throw error;
    }
}