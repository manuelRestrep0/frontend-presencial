import { Box, Button, Container, FormControl, Grid, TextField, Typography} from "@mui/material";
import Navbar from "../components/Navbar";

export default function Web(){
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
                            <Typography variant="h6" style={{ marginBottom: 2 }}>Número de tarjeta</Typography>
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
                                <Typography variant="h6" style={{ marginBottom: 2 }}>Fecha de vencimiento</Typography>
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
                                <Typography variant="h6" style={{ marginBottom: 2 }}>Código de seguridad</Typography>
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
                            <Typography variant="h6" style={{ marginBottom: 2 }}>Nombre del titular</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                placeholder=""
                            />
                            <Typography variant="h6" style={{ marginBottom: 2 }}>Documento de identificación</Typography>
                            <TextField
                                fullWidth
                                id="outlined-required"
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