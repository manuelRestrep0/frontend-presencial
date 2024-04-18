'use client'
import Navbar from "../components/Navbar";
import Resumen from "../components/Resumen";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import PersonIcon from '@mui/icons-material/Person';
import { Typography, Box, Container, FormControl, Select, MenuItem, InputLabel, List, ListItem, ListItemText, Button, SelectChangeEvent} from "@mui/material";
import Link from "next/link";

export default function Home() {

  const [direction, setDirection] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDirection(event.target.value as string);
  };

  return (
      <>
        <Navbar />

          <React.Fragment>
          <CssBaseline />

          <Box sx={{ display: 'flex',
            backgroundImage: `url('/images/fondo.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', 
          }}>
          
            <Container style={{ maxWidth: '60%',  marginLeft: '0', marginTop: '45px'}}>

              <Box sx={{ bgcolor: '#cfe8fc',width : "100%", height: '60vh' , margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >
                <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                    Pasajeros
                </Typography>
  
                  <Typography  component="div" style={{ marginTop: 15 }}>
                    <PersonIcon /> Nombre 1
                  </Typography>
              </Box>

              <Box sx={{ bgcolor: '#cfe8fc',width : "100%", height: '28vh' , margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >
            
                <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                    Método de pago
                </Typography>

                <FormControl style={{ width: '50%', marginTop: 30 }}>
                  <InputLabel id="label">Método de pago</InputLabel>
                  <Select
                    labelId="label"
                    id="select-passenger"
                    label="direction"
                    value = {direction}
                    onChange={handleChange}
                  >
                    <MenuItem value={"/modulo-pagos-a/credito"}>Tarjeta de crédito</MenuItem>
                    <MenuItem value={"/modulo-pagos-a/debito"}>Tarjeta de débito</MenuItem>
                    <MenuItem value={"/modulo-pagos-a/paypal"}>Paypal</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              
            </Container>

            <Container style={{ maxWidth: '40%',  marginLeft: 'auto', marginTop: '45px'}}>
              <Box sx={{ bgcolor: '#cfe8fc', width : "100%", height: '89vh' , margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >
                
                <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                    Resumen
                </Typography>
                
                <Box sx={{ p : '20px' }}>
                  <hr />
                  <Resumen />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '40px'}}>
                  <Link href={direction}>
                        <div className="flex justify-end mt-4">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continuar</button>
                        </div>
                  </Link>
                  </Box>
                </Box>
                
              </Box>
            </Container>

          </Box>
          </React.Fragment>
      </>
  );
}
// export const getServerSideProps = async (context) => {
//   const res = await fetch("https://codefact.udea.edu.co/bookings/searchbybookingid?bookingID=1")
  
// }
