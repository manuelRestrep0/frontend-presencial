import CheckIcon from '@mui/icons-material/Check';
import { Alert, Box, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Payment } from "../interfaces";
import { postPayment } from "../services/paymentMethods";

interface CardProps {
    bookingId?: number;
    paymentMethod?: number;
}

export default function Card({ bookingId }: CardProps) {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState<Payment>({
        cardNumber: "",
        cardHolderName: "",
        expirationDate: "",
        cvv: 0,
        phone: "",
        idNumber: 0,
        bookingId: bookingId
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const handleSubmit = async () => {
        try {
            console.log('formData:', formData)
            await postPayment(formData)
            setSuccess(true);
        } catch (error) {
            console.error('Error posting payment:', error);
        }
    };

    return (
        <>
        {success ? (
        <Alert icon={<CheckIcon fontSize="inherit" />} variant="filled" severity="success">
            Pago efectuado correctamente
        </Alert>
        ) : (
            <FormControl style={{ marginTop: 10 }}>
                <Box sx={{ p: 2, bgcolor: '#cfe8fc', borderRadius: '10px' }}>
                    <Typography style={{ marginBottom: 2 }}>Número de tarjeta</Typography>
                    <TextField
                        fullWidth
                        required
                        id="cardNumber"
                        label="Required"
                        defaultValue=""
                        placeholder=""
                        onChange={handleChange}

                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography style={{ marginBottom: 2 }}>Fecha de vencimiento</Typography>
                            <TextField
                                fullWidth
                                required
                                id="expirationDate"
                                label="Required"
                                defaultValue=""
                                placeholder="00/0000"
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography style={{ marginBottom: 2 }}>Código de seguridad</Typography>
                            <TextField
                                fullWidth
                                required
                                id="cvv"
                                label="Required"
                                defaultValue=""
                                placeholder=""
                                onChange={handleChange}

                            />
                        </Grid>
                    </Grid>
                    <Typography style={{ marginBottom: 2 }}>Nombre del titular</Typography>
                    <TextField
                        fullWidth
                        required
                        id="cardHolderName"
                        label="Required"
                        defaultValue=""
                        placeholder=""
                        onChange={handleChange}

                    />
                    <Typography style={{ marginBottom: 2 }}>Documento de identificación</Typography>
                    <TextField
                        fullWidth
                        id="idNumber"
                        defaultValue=""
                        placeholder=""
                        onChange={handleChange}

                    />
                    <Typography style={{ marginBottom: 2 }}>Numero de cuotas</Typography>
                    <TextField
                        fullWidth
                        id="phone"
                        defaultValue=""
                        placeholder=""
                        onChange={handleChange}

                    />
                </Box>
                <div className="flex justify-center mt-3">
                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={handleSubmit}
                    >Pagar</button>
                </div>
            </FormControl>
        )}
        </>
    )
}
