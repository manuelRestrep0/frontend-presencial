"use client"
import { Avatar, Container,MenuItem,  Link,Select, TextField } from "@mui/material"
import { Button, Grid, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import React, { useEffect, useState } from "react"
import facebook from "../../assets/asset-facebook.png"
import github from "../../assets/asset-github.png"
import google from "../../assets/asset-google.png"
import { registerUser } from "app/api/userService"
import { User } from "app/api/types"
import DatePickerComponent from "components/DatePicker"


export default function Signin() {
  const [idNumber, setIdNumber] = useState("")
  const [idNumberError, setIdNumberError] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fullNameError, setFullNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [idType, setIdType] = useState("")
  const [gender, setGender] = useState("")
  const [selectedDate, setSelectedDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("")
  const [country, setCountry] = useState("")
  const [province, setProvince] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [isValid, setIsValid] = useState(true)


  /**
   * Estilo del contenedor principal.
   * @type {Object}
   */
  const paperStyle = { padding: 20, height: "70vh", width: "50%", margin: "7% auto" }

  /**
   * Estilo de los campos de entrada.
   * @type {Object}
   */
  const inputs = { margin: "10px auto" }

  /**
   * Estilo del enlace de inicio de sesión.
   * @type {Object}
   */
  const login = { marginTop: "20%" }

  /**
   * Estilo del fondo azul.
   * @type {Object}
   */

  /**
   * Estilo del título.
   * @type {Object}
   */
  const title = { textAlign: "center", fontWeight: "bold", marginBottom: "20px" }

  /**
   * Estilo de la imagen del avión.
   * @type {Object}
   */

  /**
   * Valida el formato del correo electrónico.
   */
  const validateEmail = (email: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValid) {
      setEmailError("Correo electrónico inválido")
    } else {
      setEmailError("")
    }
  }

  /**
   * Valida la fortaleza de la contraseña.
   * @param {string} password - Contraseña a validar.
   */
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número, un carácter especial (@$!%*?&) y tener entre 8 y 15 caracteres"
      )
    } else {
      setPasswordError("")
    }
  }

  /**
   * Valida que la contraseña coincida con la confirmación.
   * @param {string} confirmPassword - Confirmación de la contraseña.
   */
  const validateConfirmPassword = (confirmPassword: string) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden")
    } else {
      setConfirmPasswordError("")
    }
  }

  /* useEffect(() => {
  const isValid = !!name && !!lastName && !!email && !!password && !!confirmPassword && !fullNameError && !emailError && !passwordError && !confirmPasswordError && !idNumberError;
  setIsValid(isValid);
}, [idNumberError, name, lastName, email, password, confirmPassword, fullNameError, emailError, passwordError, confirmPasswordError]); */

  const handleIdNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const regex = /^\d+$/
    if (regex.test(value)) {
      //Si el valor del TextField es un número, se setea en el estado y permite registrar el formulario
      console.log("El valor ingresado es un número")
      setIdNumber(value)
      setIdNumberError("")
    } else {
      setIdNumberError("El valor ingresado no es un número")
    }
  }

  /**
   * Maneja el cambio en el campo de nombre completo.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio en el campo.
   */
  const handleFullNameChange = (e:any) => {
    const value = e.target.value
    
    value.split(" ").length >=2 ? setName(value.split(" ")[0]) : setName("")
    value.split(" ").length >=2 ? setLastName(value.split(" ")[1]) : setLastName("")
    setFullNameError("")
  }

  /**
   * Maneja el cambio en el campo de contraseña.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio en el campo.
   */
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    validatePassword(value)
  }

  /**
   * Maneja el cambio en el campo de confirmación de contraseña.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio en el campo.
   */
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConfirmPassword(value)
    validateConfirmPassword(value)
  }

  /**
   * Maneja el cambio en el campo de correo electrónico.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio en el campo.
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    validateEmail(value)
  }
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = {
      idType: idType,
      idNumber: idNumber,
      firstName: name,
      lastName: lastName,
      genre: gender,
      birthDate: selectedDate,
      phoneNumber: phoneNumber,
      country: country,
      province: province,
      city: city,
      address: address,
      email: email,
      password: password,
    } 
    try {
      registerUser(user as User)
      console.log("Usuario registrado exitosamente")
    } catch (error) {
      console.error("Error registrando usuario:", error)
    }

  }


  return (
    <Container style={paperStyle}>
      <Typography variant="h4" component="h2" sx={title}>
        Registrarte
      </Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ marginBottom: "7%" }}>
        <Avatar alt="Imagen 1" src={facebook.src} style={{ margin: "10px" }} />
        <Avatar alt="Imagen 2" src={google.src} style={{ margin: "10px" }} />
        <Avatar alt="Imagen 3" src={github.src} style={{ margin: "10px" }} />
      </Grid>
      <form onSubmit={handleRegister}>



        <Select label="Tipo de documento" value= {idType} style={inputs} onChange= {(e) => setIdType(e.target.value)}>
            <MenuItem value="Cedula">Cedula</MenuItem>
            <MenuItem value="Pasaporte">Pasaporte</MenuItem>
            <MenuItem value="Tarjeta">Tarjeta de identidad</MenuItem>
        </Select>

        <TextField
          label="Número de documento"
          placeholder="Número de documento"
          type="number"
          fullWidth
          required
          variant="outlined"
          error={!!idNumberError}
          helperText={idNumberError}
          onChange={handleIdNumberChange}
        />
        <TextField
          label="Nombre completo"
          placeholder="Nombre completo"
          type="text"
          fullWidth
          required
          variant="outlined"
          style={{ margin: "10px auto" }}
          onChange={handleFullNameChange}
          error={!!fullNameError}
          helperText={fullNameError}
        />

        <Select
            label="Genero"
            value= {gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="M">Masculino</MenuItem>
            <MenuItem value="F">Femenino</MenuItem>
            <MenuItem value="O">Prefiero no especificar</MenuItem>
          </Select>
        
        <DatePickerComponent onChange={setSelectedDate}/>

        <TextField
          label="Phone Number"
          placeholder="Phone number"
          type="text"
          fullWidth
          required
          variant="outlined"
          style={inputs}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <TextField
          label="Country"
          placeholder="Country"
          type="text"
          fullWidth
          required
          variant="outlined"
          style={inputs}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <TextField
          label="Province"
          placeholder="Province"
          type="text"
          fullWidth
          required
          variant="outlined"
          style={inputs}
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />

        <TextField
          label="City"
          placeholder="City"
          type="text"
          fullWidth
          required
          variant="outlined"
          style={inputs}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <TextField
          label="Address"
          placeholder="Address"
          type="text"
          fullWidth
          required
          variant="outlined"
          style={inputs}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        
        <TextField
          label="Email"
          placeholder="Email"
          type="email"
          fullWidth
          required
          variant="outlined"
          style={inputs}
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Contraseña"
          placeholder="Contraseña"
          type="password"
          fullWidth
          required
          variant="outlined"
          style={{ margin: "10px auto" }}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
        />
        <TextField
          label="Confirmar contraseña"
          placeholder="Confirmar contraseña"
          type="password"
          fullWidth
          required
          variant="outlined"
          style={{ margin: "10px auto" }}
          onChange={handleConfirmPasswordChange}
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
        />
        
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={{ ...inputs, backgroundColor: blue[500] }}
          disabled={!isValid}
        >
          Registrarme
        </Button>
      </form>
      <Typography style={login}>
        <Link href="/auth-B/login">¿Ya tienes cuenta?</Link>
      </Typography>
      <button onClick={() => console.log(selectedDate)}>Mostrar datos</button>



    </Container>
  )
}
