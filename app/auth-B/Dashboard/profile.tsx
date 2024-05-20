import { Avatar, Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const paperStyle = { padding: 20, border: "1px solid #c2c2c2", borderRadius: "10px"};
const title = { fontWeight: "bold" };
const textStyle = { fontFamily: 'Roboto, sans-serif', margin: "15px 0px" };
const inputs = { display: 'flex', alignItems: 'center' };


const UserProfile: React.FC = () => {
  return (
    <Grid container>
    

      <Grid item xs={6} style={inputs}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '60%', height: '80%', margin: 'auto', padding:'10' }} />
      </Grid>

      <Grid item xs={6}>
        <Stack spacing={2}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" value="Test" style={textStyle} />
          <TextField id="outlined-basic" label="Apellido" variant="outlined" value="Test" style={textStyle} />
          <TextField id="outlined-basic" label="Phone" variant="outlined" value="310 4349900" style={textStyle} />
          <TextField id="outlined-basic" label="Country" variant="outlined" value="Colombia" style={textStyle} />
          <TextField id="outlined-basic" label="Province" variant="outlined" value="Antioquia" style={textStyle} />
          <TextField id="outlined-basic" label="City" variant="outlined" value="Bello" style={textStyle} />
          <TextField id="outlined-basic" label="Direccion" variant="outlined" value="Calle 34 #22-11" style={textStyle} />
          
          <Button variant="contained" color="primary" style={{ width: '100%', margin: '15px 0px' }}>Editar</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserProfile;



