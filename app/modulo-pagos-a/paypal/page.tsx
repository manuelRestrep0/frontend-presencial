import { Box, Button, Container, FormControl, Grid, TextField, Typography} from "@mui/material";
import Navbar from "../components/Navbar";

export default function paypal(){
    return (
        <>
            <Navbar/>
            <Box sx={{ textAlign: 'center',
                backgroundImage: `url('/images/fondo.jpg')`, // Reemplaza 'ruta/a/tu/imagen.jpg' con la ruta de tu imagen de fondo
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Container style={{ }}>
                    <Typography variant="h5" style={{ }}>Paypal</Typography>
                    
                    <FormControl style={{ marginTop: 10 }}>
                        <Box sx={{  p: 3,bgcolor: '#cfe8fc', borderRadius: '10px', minWidth: '100%'}}>
                            <Typography  style={{ marginBottom: 2 }}>Correo</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                placeholder=""
                            />
                            
                            <Typography style={{ marginBottom: 2 }}>Contraseña</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                placeholder=""
                            />
                            
                        </Box>
                            <div className="flex justify-center mt-3">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ingresar</button>
                            </div>
                    </FormControl>
                </Container>
                
                
            </Box>
        </>
    )
}