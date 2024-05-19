import { useState } from 'react';
import { Alert, Box, CircularProgress, FormControl, Snackbar, TextField, Typography } from "@mui/material";
import { PaypalType } from '../interfaces';
import { postPaymentPaypal } from '../services/paymentMethods';

interface PaypalProps {
    bookingId?: number;
}

export default function Paypal({ bookingId }: PaypalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const handleSubmit = async () => {
        try {
            setAlertMessage("Procesando el pago...");
            setIsProcessing(true);
            setAlertOpen(true);

            const data: PaypalType = {
                email: email,
                password: password,
                bookingId: bookingId
            };

            await new Promise(resolve => setTimeout(resolve, 5000));

            await postPaymentPaypal(data);

            setAlertMessage("Pago efectuado");
            setAlertOpen(true);


            setEmail("");
            setPassword("");
            setIsButtonDisabled(true);
        } catch (error) {
            console.error("Unexpected error:", error);
            setAlertMessage("Ocurrió un error inesperado");
            setAlertOpen(true);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        if (id === "email") {
            setEmail(value);
        } else if (id === "password") {
            setPassword(value);
        }
        setIsButtonDisabled(email.trim() === "" || password.trim() === "");
    };

    return (
        <>
            <FormControl style={{ marginTop: 10 }}>
                <Box sx={{ p: 3, bgcolor: '#cfe8fc', borderRadius: '10px', minWidth: '100%' }}>
                    <Typography style={{ marginBottom: 2 }}>Correo</Typography>
                    <TextField
                        fullWidth
                        required
                        id="email"
                        label="Correo"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <Typography style={{ marginBottom: 2 }}>Contraseña</Typography>
                    <TextField
                        fullWidth
                        required
                        id="password"
                        type="password"
                        label="Contraseña"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Box>
                <div className="flex justify-center mt-3">
                    <button
                        type="button"
                        id="paypal-payment-button"
                        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700'}`}
                        onClick={handleSubmit}
                        disabled={isButtonDisabled}
                    >
                        Ingresar
                    </button>
                    {isProcessing && <CircularProgress size={24} />}
                </div>
            </FormControl>

            <Snackbar open={alertOpen} autoHideDuration={3000} onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity={alertMessage === "Pago efectuado" ? "success" : "error"}>
                    {alertMessage}
                </Alert>
            </Snackbar>


        </>
    )
}
