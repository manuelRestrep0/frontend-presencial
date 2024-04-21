import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { BookingInfo } from '../interfaces';
import { getBooking, getListBookings } from '../services/booking';

interface Props {
  onBookingIdChange: (bookingId: number) => void;
}


export default function Resumen({ onBookingIdChange }: Props) {
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsData = await getListBookings();
        if (bookingsData.length > 0 && bookingsData[0]?.bookingId) {
          const bookingId = bookingsData[0].bookingId;
          onBookingIdChange(bookingId);
          const bookingData = await getBooking(bookingId);
          setBookingInfo(bookingData);        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

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
                  <TableCell align="right">{bookingInfo ? new Date(bookingInfo.bookingDate).toLocaleDateString() : '-'}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Precio tiquete libre de impuestos
                  </TableCell>
                  <TableCell align="right">{bookingInfo?.basePrice}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Impuestos sobre el tiquete
                  </TableCell>
                  <TableCell align="right">{bookingInfo?.tax}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Total a Pagar
                  </TableCell>
                  <TableCell align="right">{bookingInfo?.totalPrice}</TableCell>
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