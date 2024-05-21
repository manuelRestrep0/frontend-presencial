'use client'
import { Box, FormControl, Typography } from "@mui/material";

import * as React from 'react';
import NavbarCustom from "./components/Navbar";
import BookingSelect from "./components/BookingSelect";
import Link from "next/link";

export default function Home() {
    const [idBooking, setIdBooking] = React.useState<number | null>(null);
    const handleBookingIdChange = (newIdBooking: number) => {
        setIdBooking(newIdBooking);
    };
    return (
        <>
            <NavbarCustom />
            <Box sx={{
                textAlign: 'center',
                backgroundImage: `url('/images/fondo.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box style={{ minWidth: '70%', maxWidth: '90%' }}>
                    <FormControl style={{ marginTop: 10 }}>
                        <Box sx={{ p: 3, bgcolor: '#cfe8fc', borderRadius: '10px', minWidth: '100%' }}>
                            <Typography variant="h5" style={{ marginBottom: 2 }}>Reservas disponibles</Typography>
                            <BookingSelect setSelectedBooking={handleBookingIdChange} />

                            <Link href={idBooking ? `/modulo-pagos-a/booking?bookingId=${encodeURIComponent(idBooking)}` : '#'}>
                                <div className="flex justify-center mt-3">
                                    <button
                                        type="button"
                                        id="continue-to-payment-button"
                                        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          ${idBooking ? 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' : 'bg-gray-400 cursor-not-allowed'}`}
                                        disabled={!idBooking}
                                    >
                                        Ver
                                    </button>
                                </div>
                            </Link>
                        </Box>
                    </FormControl>
                </Box >
            </Box >
        </>
    )
}