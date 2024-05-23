import { useState } from 'react';
import { Avatar, Button, Divider, Grid,MenuItem, Stack,Select, TextField, Typography } from '@mui/material';
import DatePickerComponent from 'components/DatePicker';

const paperStyle = { padding: 20, border: "1px solid #c2c2c2", borderRadius: "10px"};
const title = { fontWeight: "bold" };
const textStyle = { fontFamily: 'Roboto, sans-serif', margin: "15px 0px" };
const inputs = { display: 'flex', alignItems: 'center' };

const UserProfile: React.FC = () => {


  const [gender, setGender] = useState('');

  const handleGenderChange = (e: any) => {
    setGender(e.target.value);
  }

  



  return (
<>

    <Grid container>
    

      <Grid item xs={6} style={inputs}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width:"200px",height:"200px", margin: 'auto', padding:'10' }} />
      </Grid>

      <Grid item xs={6}>
        <Stack spacing={2}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" value="Test" style={textStyle} />
          <TextField id="outlined-basic" label="Apellido" variant="outlined" value="Test" style={textStyle} />

          <Select
            label="Genero"
            value= {gender}
            onChange= {handleGenderChange}
          >
            <MenuItem value="Male">Masculino</MenuItem>
            <MenuItem value="Female">Femenino</MenuItem>
            <MenuItem value="Other">Prefiero no especificar</MenuItem>
          </Select>

          <DatePickerComponent />
          
          <TextField id="outlined-basic" label="Fecha de nacimiento" variant="outlined" value="Test" style={textStyle} />
          <TextField id="outlined-basic" label="Celular" variant="outlined" value="310 4349900" style={textStyle} />
          <TextField id="outlined-basic" label="Pais" variant="outlined" value="Colombia" style={textStyle} />
          <TextField id="outlined-basic" label="Provincia" variant="outlined" value="Antioquia" style={textStyle} />
          <TextField id="outlined-basic" label="Ciudad" variant="outlined" value="Bello" style={textStyle} />
          <TextField id="outlined-basic" label="Direccion" variant="outlined" value="Calle 34 #22-11" style={textStyle} />
          <Button variant="contained" color="primary" style={{ width: '100%', margin: '15px 0px' }}>save</Button>
        </Stack>
      </Grid>
    </Grid>
    </>
  );
};


export default UserProfile;



