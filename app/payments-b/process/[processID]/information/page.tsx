"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

export default function Information() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const router = useRouter();

  return (
    <div className="text-[black] h-screen flex justify-center items-center bg-[url(https://i.ibb.co/NCzv6vC/image-2.png)] bg-no-repeat bg-cover bg-center">
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "white",
          border: "30px solid #2196F3",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minWidth: "35vw",
        }}
      >
        <CssBaseline />
        <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color={"black"}
          fontSize={40}
        >
          Datos del Pago
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="clientName"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                value={"John Jonhson"}
                id="clientName"
                label="Nombre del cliente"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="reservNumber"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                value={"444-00-23"}
                id="reservNumber"
                label="Nro de la reserva"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="seatsNumber"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                value={"4"}
                id="seatsNumber"
                label="Nro de asientos reservados"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="suitcaseNumber"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                value={"8"}
                id="suitcaseNumber"
                label="Nro de equipajes"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="originCity"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                value={"MDE Medellin"}
                id="originCity"
                label="Ciudad Origen"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="destinationCity"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                value={"MEX Ciudad de Mexico"}
                id="destinationCity"
                label="Ciudad de Destino"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                component="h5"
                color={"black"}
                fontSize={15}
                sx={{
                  fontWeight: "normal",
                }}
              >
                Valor de los asientos:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                component="h5"
                color={"black"}
                fontSize={15}
                sx={{
                  fontWeight: "normal",
                }}
              >
                400.00$
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                component="h5"
                color={"black"}
                fontSize={15}
                sx={{
                  fontWeight: "normal",
                }}
              >
                Valor de los equipajes:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                component="h5"
                color={"black"}
                fontSize={15}
                sx={{
                  fontWeight: "normal",
                }}
              >
                200.00$
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                component="h5"
                color={"black"}
                fontSize={15}
                sx={{
                  fontWeight: "normal",
                }}
              >
                Impuestos adicionales:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                component="h5"
                color={"black"}
                fontSize={15}
                sx={{
                  fontWeight: "normal",
                }}
              >
                50.00$
              </Typography>
            </Grid>
          </Grid>

          <button
            className="text-[15] inline-flex items-center justify-center relative box-border cursor-pointer align-middle no-underline font-medium min-w-[64px] rounded text-[white] bg-[#2196F3] w-full mt-6 mb-4 m-0 px-4 py-1.5 border-0 hover:bg-[#0e6ecd]"
            onClick={() => {
              router.push('/selectGateway');
            }}
          >
            SELECCIONAR PASARELA DE PAGO
          </button>
        </Box>
      </Box>
      </Container>
    </div>
  );
}
