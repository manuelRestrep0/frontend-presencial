"use client"
import { Avatar, Checkbox, Container, FormControlLabel, Link, TextField } from "@mui/material"
import { Button, Grid, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import facebook from "../../../assets/asset-facebook.png"
import github from "../../../assets/asset-github.png"
import google from "../../../assets/asset-google.png"

export default function Login() {
  const paperStyle = { padding: 20, height: "70vh", width: "50%", margin: "7% auto" }
  const inputs = { margin: "10px auto" }
  const login = { "margin-top": "20%" }
  const title = { textAlign: "center", fontWeight: "bold", marginBottom: "40%" }
  return (
    <Grid container>
      
        <Container style={paperStyle}>
          <Typography variant="h4" component="h2" sx={title}>
            Iniciar sesión
          </Typography>
          <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ "margin-bottom": "7%" }}>
            <Avatar alt="Imagen 1" src={facebook.src} style={{ margin: "10px" }} />
            <Avatar alt="Imagen 2" src={google.src} style={{ margin: "10px" }} />
            <Avatar alt="Imagen 3" src={github.src} style={{ margin: "10px" }} />
          </Grid>
          <TextField
            label="Email"
            placeholder="Email"
            type="email"
            fullWidth
            required
            variant="outlined"
            style={inputs}
          />
          <TextField
            label="Contraseña"
            placeholder="Contraseña"
            type="password"
            fullWidth
            required
            variant="outlined"
            style={inputs}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Recuerdame"
          ></FormControlLabel>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={{ ...inputs, backgroundColor: blue[500] }}
          >
            Iniciar sesión
          </Button>
          <Typography sx={login}>
            <Link href="/auth-B/signin">¿No tienes una cuenta?</Link>
          </Typography>
        </Container>
    </Grid>
  )
}
