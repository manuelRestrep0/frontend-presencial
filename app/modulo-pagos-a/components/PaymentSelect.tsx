import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { PaymentMethod } from '../interfaces';
import { getPaymentMethods } from '../services/paymentMethods';

interface Props {
    setSelectedPayment: (payment: PaymentMethod) => void;
}

export default function PaymentSelect({ setSelectedPayment }: Props) {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [selectedPaymentId, setSelectedPaymentId] = useState<"" | { value: string } | undefined>("");

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            try {
                const methods = await getPaymentMethods();
                setPaymentMethods(methods);
            } catch (error) {
                console.error('Error fetching payment methods:', error);
            }
        };

        fetchPaymentMethods();
    }, []);

    const handleChange = (event: SelectChangeEvent<{ value: string }>) => {
        const selectedId = event.target.value as string;
        setSelectedPaymentId(selectedId !== "" ? { value: selectedId } : undefined);
        const selectedMethod = paymentMethods.find(method => method.id === selectedId);
        if (selectedMethod) {
            setSelectedPayment(selectedMethod);
        }
    };

    return (
        <FormControl style={{ width: '50%', marginTop: 30 }}>
            <InputLabel id="label">Método de pago</InputLabel>
            <Select
                labelId="label"
                id="select-payment"
                label="Método de pago"
                value={selectedPaymentId}
                onChange={handleChange}
            >
                {paymentMethods.map((method) => (
                    <MenuItem key={method.id} value={method.id}>
                        {method.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
