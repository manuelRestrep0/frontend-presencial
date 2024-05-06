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

    const [debitcard, setDebitcard] = useState('');
    const [date, setDate] = useState('');
    const [ccv, setCcv] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
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
            // <FormControl style={{ marginTop: 10 }}>
            //     <Box sx={{ p: 2, bgcolor: '#cfe8fc', borderRadius: '10px' }}>
            //         <Typography style={{ marginBottom: 2 }}>Número de tarjeta</Typography>
            //         <TextField
            //             fullWidth
            //             required
            //             id="cardNumber"
            //             label="Required"
            //             defaultValue=""
            //             placeholder=""
            //             onChange={handleChange}

            //         />
            //         <Grid container spacing={2}>
            //             <Grid item xs={6}>
            //                 <Typography style={{ marginBottom: 2 }}>Fecha de vencimiento</Typography>
            //                 <TextField
            //                     fullWidth
            //                     required
            //                     id="expirationDate"
            //                     label="Required"
            //                     defaultValue=""
            //                     placeholder="00/0000"
            //                     onChange={handleChange}

            //                 />
            //             </Grid>
            //             <Grid item xs={6}>
            //                 <Typography style={{ marginBottom: 2 }}>Código de seguridad</Typography>
            //                 <TextField
            //                     fullWidth
            //                     required
            //                     id="cvv"
            //                     label="Required"
            //                     defaultValue=""
            //                     placeholder=""
            //                     onChange={handleChange}

            //                 />
            //             </Grid>
            //         </Grid>
            //         <Typography style={{ marginBottom: 2 }}>Nombre del titular</Typography>
            //         <TextField
            //             fullWidth
            //             required
            //             id="cardHolderName"
            //             defaultValue=""
            //             placeholder=""
            //             onChange={handleChange}

            //         />
            //         <Typography style={{ marginBottom: 2 }}>Documento de identificación</Typography>
            //         <TextField
            //             fullWidth
            //             id="idNumber"
            //             defaultValue=""
            //             placeholder=""
            //             onChange={handleChange}

            //         />
            //         <Typography style={{ marginBottom: 2 }}>Numero de cuotas</Typography>
            //         <TextField
            //             fullWidth
            //             id="phone"
            //             defaultValue=""
            //             placeholder=""
            //             onChange={handleChange}

            //         />
            //         <div className="flex justify-center mt-3">
            //             <button type="button"
            //                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            //                 onClick={handleSubmit}
            //             >Pagar</button>
            //         </div>
            //     </Box>
            // </FormControl>

                    <Box 
                        component="form"
                        sx={{  p: 3,bgcolor: '#cfe8fc', borderRadius: '10px', marginTop: 1}}>
                        <FormControl style={{ marginTop: 10 }}>
                            <Typography style={{ marginBottom: 2 }}>Número de tarjeta</Typography>
                            <TextField
                                fullWidth
                                required
                                id="debitcard"
                                label="Required"
                                onChange={handleChange}
                                placeholder=""
                                error={errors.debitcard}
                                helperText={errors.debitcard && 'Ingrese información válida'}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                <Typography  style={{ marginBottom: 2 }}>Fecha de vencimiento</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    id="date"
                                    label="Required"
                                    onChange={handleChange}
                                    placeholder=""
                                    error={errors.date}
                                    helperText={errors.date && 'Ingrese información válida'}
                                />
                                </Grid>
                                <Grid item xs={6}>
                                <Typography  style={{ marginBottom: 2 }}>Código de seguridad</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    id="ccv"
                                    label="Required"
                                    onChange={handleChange}
                                    placeholder=""
                                    error={errors.ccv}
                                    helperText={errors.ccv && 'Ingrese información válida'}
                                />
                                </Grid>
                            </Grid>
                            <Typography  style={{ marginBottom: 2 }}>Nombre del titular</Typography>
                            <TextField
                                fullWidth
                                id="name"
                                onChange={handleChange}
                                placeholder=""
                                error={errors.name}
                                helperText={errors.name && 'Ingrese información válida'}
                            />
                            <Typography  style={{ marginBottom: 2 }}>Documento de identificación</Typography>
                            <TextField
                                fullWidth
                                id="id"
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
        </>
    )
}
