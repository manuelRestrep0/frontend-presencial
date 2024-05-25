import CheckIcon from '@mui/icons-material/Check';
import { Alert, Box, FormControl, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Payment } from "../interfaces";
import { postPayment } from "../services/paymentMethods";

interface CardProps {
    bookingId?: number;
    paymentMethod?: number;
}

export default function Card({ bookingId }: CardProps) {

    const [debitcard, setDebitcard] = useState('');
    const [date, setDate] = useState('');
    const [ccv, setCcv] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [errors, setErrors] = useState({
        debitcard: false,
        date: false,
        ccv: false,
        name: false,
        id: false,
    });

    const validateDebitcard = (debitcard: string): boolean => {
        const regex = /^[0-9]+$/;
        return regex.test(debitcard);
    };

    const validateDate = (date: string): boolean => {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(date);
    }

    const validateCcv = (ccv: string): boolean => {
        const regex = /^[0-9]+$/;
        return regex.test(ccv);
    }

    const validateName = (name: string): boolean => {
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/;
        return regex.test(name);
    }

    const validateId = (id: string): boolean => {
        const regex = /^[0-9]*$/;
        return regex.test(id);
    }

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
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async () => {

        try {
            setAlertMessage("Procesando el pago...");
            setIsProcessing(true);
            setAlertOpen(true);
            await new Promise(resolve => setTimeout(resolve, 5000));
            await postPayment(formData) as any;
            setAlertMessage("Pago efectuado");
            setAlertOpen(true);
            setTimeout(() => {
                window.location.href = "/modulo-pagos-a";
            }, 5000);
        } catch (error) {
            console.error("Unexpected error:", error);
            setAlertMessage("Ocurrió un error inesperado");
            setAlertOpen(true);
        } finally {
            setIsProcessing(false);
        }
    };
    return (
        <>
            {success ? (
                <Alert icon={<CheckIcon fontSize="inherit" />} variant="filled" severity="success">
                    Pago efectuado correctamente
                </Alert>
            ) : (
                <Box
                    component="form"
                    sx={{ p: 3, bgcolor: '#cfe8fc', borderRadius: '10px', marginTop: 1 }}>
                    <FormControl style={{ marginTop: 10 }}>
                        <Typography style={{ marginBottom: 2 }}>Número de tarjeta</Typography>
                        <TextField
                            fullWidth
                            required
                            id="debitcard"
                            name="cardNumber"
                            label="Required"
                            onChange={handleChange}
                            placeholder=""
                            error={errors.debitcard}
                            helperText={errors.debitcard && 'Ingrese información válida'}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography style={{ marginBottom: 2 }}>Fecha de vencimiento</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    id="date"
                                    name="expirationDate"
                                    label="Required"
                                    onChange={handleChange}
                                    placeholder=""
                                    error={errors.date}
                                    helperText={errors.date && 'Ingrese información válida'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography style={{ marginBottom: 2 }}>Código de seguridad</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    id="ccv"
                                    name="cvv"
                                    label="Required"
                                    onChange={handleChange}
                                    placeholder=""
                                    error={errors.ccv}
                                    helperText={errors.ccv && 'Ingrese información válida'}
                                />
                            </Grid>
                        </Grid>
                        <Typography style={{ marginBottom: 2 }}>Nombre del titular</Typography>
                        <TextField
                            fullWidth
                            id="name"
                            name="cardHolderName"
                            onChange={handleChange}
                            placeholder=""
                            error={errors.name}
                            helperText={errors.name && 'Ingrese información válida'}
                        />
                        <Typography style={{ marginBottom: 2 }}>Documento de identificación</Typography>
                        <TextField
                            fullWidth
                            id="id"
                            name="idNumber"
                            onChange={handleChange}
                            placeholder=""
                            error={errors.id}
                            helperText={errors.id && 'Ingrese información válida'}
                        />
                        <div className="flex justify-center mt-3">
                            <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                onClick={handleSubmit}
                            >Pagar</button>
                        </div>
                    </FormControl>
                </Box>
            )}

            <Snackbar open={alertOpen} autoHideDuration={5000} onClose={() => setAlertOpen(false)} id="payment-processing">
                <Alert onClose={() => setAlertOpen(false)} severity={alertMessage === "Pago efectuado" ? "success" : "error"} id={alertMessage === "Pago efectuado" ? "payment-success" : "payment-error"}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    )
}
