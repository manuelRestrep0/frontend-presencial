'use client'
import { TextField, Button, Grid, Paper, Card, CardContent, Checkbox, FormControlLabel } from '@material-ui/core';


const FormReserve: React.FC = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar los datos del formulario
    };

    return (
        <Paper className='flex flex-col p-10'>
            <div className="p-3">
                <h1 className="text-2xl font-bold mb-100">Pasajero</h1>
                <p className="mb-10">Ingresa los datos basicos del pasajero </p>
                <Card variant='elevation'>
                    <CardContent className="flex flex-col justify-center items-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <Grid container spacing={4}>
                                <Grid item xs={10} sm={6} className="mt-4" >
                                    <TextField size="small" label="Nombre" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Apellido" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="CC" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Fecha de nacimiento" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Telefono" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Direccion" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Correo Electronico" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>

                            </Grid>

                        </form>
                    </CardContent>
                </Card>
                <h1 className="text-lg font-bold mt-5  mb-10" >Información de emergencia</h1>
                <Card>
                    <CardContent className="flex flex-col justify-center items-center">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Contacto de emergencia" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Teléfono de emergencia" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Dirección de emergencia" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField size="small" label="Correo de emergencia" fullWidth variant="outlined"
                                        className="rounded-md max-w-md" InputLabelProps={{
                                            style: {
                                                fontSize: 12,
                                                fontFamily: 'roboto'
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <FormControlLabel
                                        control={<Checkbox color="primary" />}
                                        label="Desea guardar la información para futuras reservas"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Button type="submit" variant="contained" color="primary"
                                        style={{ fontSize: 12 }}>
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Paper>
    );
};
export default FormReserve;