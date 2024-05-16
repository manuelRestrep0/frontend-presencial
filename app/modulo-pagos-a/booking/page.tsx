'use client'
import { Box, FormControl, TextField, Typography } from "@mui/material";
import NavbarCustom from "../components/Navbar";

export default function Booking() {


    return (
        <>
            <NavbarCustom />
            <Box sx={{
                textAlign: 'center',
                backgroundImage: `url('/images/fondo.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box style={{ minWidth: '50%', maxWidth: '90%'}}>
                <FormControl style={{ marginTop: 10 }}>
                <Box sx={{ p: 3, bgcolor: '#cfe8fc', borderRadius: '10px', minWidth: '100%' }}>

                    <Typography variant="h5" style={{ marginBottom: 2 }}>Reserva</Typography>
                    <TextField
                        fullWidth
                        required
                        id="booking"
                        type="booking"
                        label="Reserva"
                    />
                    <div className="flex justify-center mt-3">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ingresar</button>
                    </div>
                </Box>
                
            </FormControl>
                </Box>
            </Box>
        </>
    )
}