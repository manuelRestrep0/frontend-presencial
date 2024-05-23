'use client'
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Link from "next/link";
import * as React from 'react';
import Navbar from "../components/Navbar";
import Passenger from "../components/Passenger";
import PaymentSelect from "../components/PaymentSelect";
import Resumen from "../components/Resumen";
import { PaymentMethod } from "../interfaces";
import { useSearchParams } from "next/navigation";

export default function BookingDetail() {

  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');

  const [selectedPayment, setSelectedPayment] = React.useState<PaymentMethod | null>(null);
  const [idBooking, setIdBooking] = React.useState<number | null>(null);

  const handlePaymentChange = (payment: PaymentMethod) => {
    setSelectedPayment(payment);
    setIdBooking(Number(bookingId));
  };
    
  
  return (
    <>
      <Navbar />

      <React.Fragment>
        <CssBaseline />

        <Box sx={{
          display: 'flex',
          backgroundImage: `url('/images/fondo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}>

          <Container style={{ maxWidth: '60%', marginLeft: '0', marginTop: '45px' }}>

            <Passenger />

            <Box sx={{ bgcolor: '#cfe8fc', width: "100%", height: '28vh', margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >

              <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                Método de pago
              </Typography>
              <PaymentSelect setSelectedPayment={handlePaymentChange} />
            </Box>

          </Container>

          <Container style={{ maxWidth: '40%', marginLeft: 'auto', marginTop: '45px' }}>
            <Box sx={{ bgcolor: '#cfe8fc', width: "100%", height: '89vh', margin: 1, borderRadius: '10px', pl: '20px', pt: "20px" }} >

              <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                Resumen
              </Typography>

              <Box sx={{ p: '20px' }}>
                <hr />
                <Resumen/>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '40px' }}>
                  {idBooking && selectedPayment && (
                    <Link href={`/modulo-pagos-a/payment?bookingId=${encodeURIComponent(idBooking)}&paymentMethod=${encodeURIComponent(selectedPayment.id)}`}>
                      <div className="flex justify-end mt-4">
                        <button
                          type="button"
                          id="continue-to-payment-button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Continuar
                        </button>
                      </div>
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </React.Fragment>
    </>
  );
}
