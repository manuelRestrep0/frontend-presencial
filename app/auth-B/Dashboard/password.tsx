import { Box, Button , Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const textStyle = { fontFamily: 'Roboto, sans-serif', margin: "15px 0px" };


const ChangePasswordForm: React.FC = () => {
  return (
    <Box>
    <Stack spacing={2}>
    <TextField id="outlined-basic" label="Contraseña Antigua" variant="outlined" placeholder='Ingrese la contraseña antigua' style={textStyle} />
    <TextField id="outlined-basic" label="Contraseña Nueva" variant="outlined"  placeholder = 'Ingrese la nueva contraseña'style={textStyle} />
    <TextField id="outlined-basic" label="Confirmar Contraseña" variant="outlined" placeholder='Ingrese la nueva contraseña' style={textStyle} />
    <Button variant="contained" color="primary" style={{ width: '100%', margin: '15px 0px' }}>Editar</Button>
    </Stack>
    </Box>
    
  );
};

export default ChangePasswordForm;