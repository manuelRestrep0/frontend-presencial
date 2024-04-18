"use client"
import { Avatar, Container, Link, TextField } from "@mui/material"
import { Button, Grid, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import React, { useEffect, useState } from "react"
import facebook from "../../assets/asset-facebook.png"
import github from "../../assets/asset-github.png"
import google from "../../assets/asset-google.png"

export default function Signin() {
  const [idNumber, setIdNumber] = useState("")
  const [idNumberError, setIdNumberError] = useState("")
  const [fullName, setFullName] = useState("")
  const [fullNameError, setFullNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [isValid, setIsValid] = useState(false)

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

  useEffect(() => {
    setIsValid(
      !!fullName &&
        !!email &&
        !!password &&
        !!confirmPassword &&
        !fullNameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError &&
        !idNumberError
    )
  }, [
    idNumberError,
    fullName,
    email,
    password,
    confirmPassword,
    fullNameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ])

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
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFullName(value)
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
    const url = `${process.env.NEXT_PUBLIC_AUTH_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/register`

    const registerRequest = new Request(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idNumber, fullName, email, password, confirmPassword }),
    })

    fetch(registerRequest)
      .then((response) => {
        response.json()
      })
      .then((data) => {
        console.log(data)
        console.log("Usuario registrado correctamente")
      })
      .catch((error) => {
        console.log(error)
        console.log("Error al registrar el usuario")
      })
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
    </Container>
  )
}
