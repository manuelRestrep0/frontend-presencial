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
                <Container style={{ minWidth: '35%', maxWidth: '90%'}}>
                    
                    <FormControl style={{ marginTop: 10 }}>
                        <Box sx={{  p: 3,bgcolor: '#cfe8fc', borderRadius: '10px'}}>
                            <Typography variant="h6" style={{ marginBottom: 2 }}>Correo</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                placeholder=""
                            />
                            
                            <Typography variant="h6" style={{ marginBottom: 2 }}>Contraseña</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                placeholder=""
                            />
                            
                        </Box>
                        <Button variant="contained" style={{ margin: 'auto', marginTop: 10 }}>Pagar</Button>
                    </FormControl>
                </Container>
                
                
            </Box>
        </>
    )
}