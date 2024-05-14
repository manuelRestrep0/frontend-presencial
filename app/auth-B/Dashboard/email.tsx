import React from 'react';
import { Typography, Stack , TextField, Button, Box } from '@mui/material';

const textStyle = { fontFamily: 'Roboto, sans-serif', margin: "15px 0px" };


const ChangeEmailForm: React.FC = () => {
  return (
    <Box>
    <Stack spacing={2}>
    <TextField id="outlined-basic" label="Correo nuevo" variant="outlined"  placeholder = 'Ingrese el correo nuevo'style={textStyle} />
    <TextField id="outlined-basic" label="Confirmar correo" variant="outlined" placeholder='Confirme el correo ingresado' style={textStyle} />
    <Button variant="contained" color="primary" style={{ width: '100%', margin: '15px 0px' }}>Editar</Button>
    </Stack>
    </Box>
    
  );
};

export default ChangeEmailForm;