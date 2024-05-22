'use client';

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";

import Copyright from "@/../components/copyright/copyringht";
import { useRouter } from "next/navigation";

export default function Process() {

  const router= useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      reservNumber: data.get("reservNumber"),
    });
    router.push(`/payments-b/process/${data.get("reservNumber")}/information`)
  
  };




  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-500 bg-opacity-50 border-4 border-solid border-blue-900 ">
        <AttachMoneyIcon fontSize="large" />
      </div>
      <Typography component="h1" variant="h4" fontSize={60}>
        Proceso de Pago
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="reservNumber"
          label="Número de reserva"
          id="reservNumber"
        />
        <FormControlLabel
          control={
            <Checkbox value="Tyc" color="primary" />
          }
          label="Acepto los terminos y condiciones"
        />
        
        <button
          className="inline-flex items-center justify-center relative box-border cursor-pointer align-middle no-underline font-medium min-w-[64px] rounded text-[white] bg-[#1976d2] w-full mt-6 mb-4 m-0 px-4 py-1.5 border-0 hover:bg-[#0e6ecd]"
          type="submit"
        >
          CONTINUAR PROCESO DE PAGO
        </button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              ¿Olvidaste el número de reserva?
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Box>
  );
}
