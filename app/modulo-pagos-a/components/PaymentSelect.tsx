import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';

import { PaymentMethod } from '../interfaces';
import { getPaymentMethods } from '../services/paymentMethods';


export default function PaymentSelect() {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [selectedPayment, setSelectedPayment] = useState<string>('');

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            try {
                const methods = await getPaymentMethods();
                console.log('Payment methods:', methods)
                setPaymentMethods(methods);
            } catch (error) {
                console.error('Error fetching payment methods:', error);
            }
        };

        fetchPaymentMethods();
    }, []);


    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <FormControl style={{ width: '50%', marginTop: 30 }}>
            <InputLabel id="label">Método de pago</InputLabel>
            <Select
                labelId="label"
                id="select-payment"
                label="Método de pago"
                value={selectedPayment}
                onChange={handleChange}
            >
                {paymentMethods.map((method) => (
                    <MenuItem key={method.id} value={method.name}>
                        {method.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
