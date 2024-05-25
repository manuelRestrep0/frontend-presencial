import { useEffect, useState } from 'react';
import { Avatar, Button, Grid, MenuItem, Stack, Select, TextField, Typography } from '@mui/material';

import { setAuthToken } from 'app/api/apiClient';
import { getUserinfo, putUserInfo } from 'app/api/userService';
import { User } from 'app/api/types';

const paperStyle = { padding: 20, border: "1px solid #c2c2c2", borderRadius: "10px" };
const title = { fontWeight: "bold" };
const textStyle = { fontFamily: 'Roboto, sans-serif', margin: "15px 0px" };
const inputs = { display: 'flex', alignItems: 'center' };

const UserProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    idType: '',
    idNumber: '',
    firstName: '',
    lastName: '',
    genre: '',
    birthDate: '',
    phoneNumber: '',
    country: '',
    province: '',
    city: '',
    address: '',
    email: '',
    password: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getUserinfo().then((response) => {
    setUserInfo(response);
      }).catch((error) => {
        console.error('Error getting the user info:', error);
      });
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (date: any) => {
    setUserInfo(prevState => ({
      ...prevState,
      birthDate: date
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const updatedUserInfo = await putUserInfo(userInfo);
      setUserInfo(updatedUserInfo);
      setIsEditing(false);
      getUserinfo()
    } catch (error) {
      console.error('Error saving user info:', error);
    }
  };

  return (
    <Grid container>
      <Grid item xs={6} style={inputs}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: "200px", height: "200px", margin: 'auto', padding: '10' }} />
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={2}>
          {isEditing ? (
            <>
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                style={textStyle}
              />
              <TextField
                id="outlined-basic"
                label="Apellido"
                variant="outlined"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                style={textStyle}
              />
              <Select
                label="Genero"
                name="genre"
                value={userInfo.genre}
                onChange={handleChange}
                style={textStyle}
              >
                <MenuItem value="M">Masculino</MenuItem>
                <MenuItem value="F">Femenino</MenuItem>
                <MenuItem value="O">Prefiero no especificar</MenuItem>
              </Select>
              <DatePickerComponent
                value={userInfo.birthDate}
                onChange={handleDateChange}
              />
              <TextField
                id="outlined-basic"
                label="Fecha de nacimiento"
                variant="outlined"
                name="birthDate"
                value={userInfo.birthDate}
                onChange={handleChange}
                style={textStyle}
              />
              <TextField
                id="outlined-basic"
                label="Celular"
                variant="outlined"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                style={textStyle}
              />
              <TextField
                id="outlined-basic"
                label="Pais"
                variant="outlined"
                name="country"
                value={userInfo.country}
                onChange={handleChange}
                style={textStyle}
              />
              <TextField
                id="outlined-basic"
                label="Provincia"
                variant="outlined"
                name="province"
                value={userInfo.province}
                onChange={handleChange}
                style={textStyle}
              />
              <TextField
                id="outlined-basic"
                label="Ciudad"
                variant="outlined"
                name="city"
                value={userInfo.city}
                onChange={handleChange}
                style={textStyle}
              />
              <TextField
                id="outlined-basic"
                label="Direccion"
                variant="outlined"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                style={textStyle}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ width: '100%', margin: '15px 0px' }}
                onClick={handleSaveClick}
              >
                Save
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1" style={textStyle}>Nombre: {userInfo.firstName}</Typography>
              <Typography variant="body1" style={textStyle}>Apellido: {userInfo.lastName}</Typography>
              <Typography variant="body1" style={textStyle}>Genero: {userInfo.genre}</Typography>
              <Typography variant="body1" style={textStyle}>Fecha de nacimiento: {userInfo.birthDate}</Typography>
              <Typography variant="body1" style={textStyle}>Celular: {userInfo.phoneNumber}</Typography>
              <Typography variant="body1" style={textStyle}>Pais: {userInfo.country}</Typography>
              <Typography variant="body1" style={textStyle}>Provincia: {userInfo.province}</Typography>
              <Typography variant="body1" style={textStyle}>Ciudad: {userInfo.city}</Typography>
              <Typography variant="body1" style={textStyle}>Direccion: {userInfo.address}</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ width: '100%', margin: '15px 0px' }}
                onClick={handleEditClick}
              >
                Editar
              </Button>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
