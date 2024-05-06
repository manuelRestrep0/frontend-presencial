'use client'
import { Box, Button, Container, FormControl, Grid, TextField, Typography } from "@mui/material";
import Navbar from "./Navbar";

export default function Credito() {
    return (
        <>
            <Navbar />
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
                <Container style={{ minWidth: '35%', maxWidth: '90%', marginTop: '35px'}}>
                    
                    <Typography variant="h5" style={{ }}>Tarjeta de crédito</Typography>
                    
                    <FormControl style={{ marginTop: 10 }}>
                        <Box sx={{  p: 2,bgcolor: '#cfe8fc', borderRadius: '10px'}}>

                            <Typography  style={{ marginBottom: 2 }}>Número de tarjeta</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                placeholder=""
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                <Typography  style={{ marginBottom: 2 }}>Fecha de vencimiento</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue=""
                                    placeholder="00/0000"
                                />
                                </Grid>
                                <Grid item xs={6}>
                                <Typography  style={{ marginBottom: 2 }}>Código de seguridad</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue=""
                                    placeholder=""
                                />
                                </Grid>
                            </Grid>
                            <Typography  style={{ marginBottom: 2 }}>Nombre del titular</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label=""
                                defaultValue=""
                                placeholder=""
                            />
                            <Typography  style={{ marginBottom: 2 }}>Documento de identificación</Typography>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                defaultValue=""
                                placeholder=""
                            />
                            <Typography  style={{ marginBottom: 2 }}>Numero de cuotas</Typography>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                defaultValue=""
                                placeholder=""
                            />
                        </Box>
                            <div className="flex justify-center mt-3">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ingresar</button>
                            </div></FormControl>
                </Container>


            </Box>
        </>
    )
}