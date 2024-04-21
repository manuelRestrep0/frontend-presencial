'use client'
import { Box, Container, Typography } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Card from "../components/Card";
import NavbarCustom from "../components/Navbar";
import Paypal from "../components/Paypal";

export default function Payment() {

    const searchParams = useSearchParams();
    const bookingId = searchParams.get('bookingId');
    const paymentMethod = searchParams.get('paymentMethod');

    if (typeof bookingId === 'undefined' || typeof paymentMethod === 'undefined') {
        return <div>Loading...</div>;
    }

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
                <Container style={{ minWidth: '35%', maxWidth: '90%' }}>
                    {paymentMethod === '0' ?
                        (<>
                            <Typography variant="h5" style={{}}>Tarjeta de crédito</Typography>
                            <Card bookingId={Number(bookingId)} paymentMethod={Number(paymentMethod)} />
                            </>
                        ) : null}
                    {
                        paymentMethod === '1' ?
                            (
                                <>
                                <Typography variant="h5" style={{}}>Tarjeta de débito</Typography>
                                <Card bookingId={Number(bookingId)} paymentMethod={Number(paymentMethod)} />
                                </>
                            ) : null
                    }
                    {
                        paymentMethod === '2' ?
                            (
                                <>
                                    <Typography variant="h5" style={{}}>Paypal</Typography>
                                    <Paypal bookingId={Number(bookingId)} />
                                </>
                            ) : null
                    }
                </Container>
            </Box>
        </>
    )
}