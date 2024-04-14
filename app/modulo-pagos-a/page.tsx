'use client'
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import NavbarCustom from './components/Navbar';
import Resumen from './components/Resumen';
import { PaymentMethod } from './interfaces';
import { getPaymentMethods } from './services/paymentMethods';


export default function Home() {

  const [direction, setDirection] = useState();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await getPaymentMethods();
        setPaymentMethods(response);
      } catch (error) {
        console.error('Error fetching payment methods:', error);
      }
    };

    fetchPaymentMethods();
  }, []);

  // const handleChange = (event: SelectChangeEvent) => {
  //   setDirection(event.target.value as string);
  // };

  return (
    <>
      <NavbarCustom />

      <div>
        <CssBaseline />

        <Box sx={{
          display: 'flex',
          backgroundImage: `url('/images/fondo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}>

          <Container style={{ maxWidth: '60%', marginLeft: '0', marginTop: '45px' }}>

            <Box sx={{ bgcolor: '#cfe8fc', width: "100%", height: '60vh', margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >
              <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                Pasajeros
              </Typography>

              <Typography component="div" style={{ marginTop: 15 }}>
                <PersonIcon /> Nombre 1
              </Typography>
            </Box>

            <Box sx={{ bgcolor: '#cfe8fc', width: "100%", height: '28vh', margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >

              <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                Método de pago
              </Typography>

              <FormControl style={{ width: '50%', marginTop: 30 }}>
                <InputLabel id="label">Método de pago</InputLabel>
                <Select
                  labelId="label"
                  id="select-paymentMethods"
                  label="direction"
                  // value={}
                  // onChange={}
                >
                  {paymentMethods.map((method, index) => (
                    <MenuItem key={index} value={method.name}>{method.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

          </Container>

          <Container style={{ maxWidth: '40%', marginLeft: 'auto', marginTop: '45px' }}>
            <Box sx={{ bgcolor: '#cfe8fc', width: "100%", height: '89vh', margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >

              <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                Resumen
              </Typography>

              <Box sx={{ p: '20px' }}>
                <hr />
                <Resumen />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '40px' }}>
                  {/* <Link href={direction}>
                    <Button variant="contained">
                      Continuar
                    </Button>
                  </Link> */}
                </Box>
              </Box>

            </Box>
          </Container>

        </Box>
      </div>
    </>
  );
}
