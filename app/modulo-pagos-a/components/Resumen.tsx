import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { BookingInfo } from '../interfaces';
import { getBooking } from '../services/booking';
import { useSearchParams } from 'next/navigation';


export default function Resumen() {
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (typeof bookingId === 'number') {
          const bookingData = await getBooking(bookingId);
          setBookingInfo(bookingData);        
        } else {
          console.error('El bookingId_ no es un número válido.');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, [bookingId]);

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {bookingInfo ? (
              <>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Fecha de salida
                  </TableCell>
                  <TableCell align="right" id="booking-date">{bookingInfo ? new Date(bookingInfo.bookingDate).toLocaleDateString() : '-'}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Precio tiquete libre de impuestos
                  </TableCell>
                  <TableCell align="right" id="booking-price-without-taxes">{bookingInfo?.basePrice}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Impuestos sobre el tiquete
                  </TableCell>
                  <TableCell align="right" id="booking-taxes">{bookingInfo?.tax}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Total a Pagar
                  </TableCell>
                  <TableCell align="right" id="booking-total-price">{bookingInfo?.totalPrice}</TableCell>
                </TableRow>
              </>
            ) : (
              <TableRow >
                <TableCell component="th" scope="row">
                  No se encontraron datos para la reserva
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
    </>
  );
}