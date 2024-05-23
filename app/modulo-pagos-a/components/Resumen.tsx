import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useMemo, useState} from 'react';
import { BookingInfo } from '../interfaces';
import { getBooking } from '../services/booking';
import { useSearchParams } from 'next/navigation';
import { NumericFormat } from 'react-number-format';
interface ResumenProps {
  setBookingId?: () => void,

}

export default function Resumen({ setBookingId }: ResumenProps) {
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);
  const searchParams = useSearchParams();
  const bookingId = Number(searchParams.get('bookingId'));

  useMemo(() => {
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
                  <TableCell align="right" id="booking-price-without-taxes">
                    <NumericFormat value={bookingInfo?.basePrice.toFixed(0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Impuestos sobre el tiquete
                  </TableCell>

                  <TableCell align="right" id="booking-taxes">
                    <NumericFormat value={bookingInfo?.tax.toFixed(0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    Total a Pagar
                  </TableCell>
                  <TableCell align="right" id="booking-total-price">
                    <NumericFormat value={bookingInfo?.totalPrice.toFixed(0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </TableCell>
                </TableRow>
              </>
            ) : (
              <TableRow >
                <TableCell component="th" scope="row" id="booking-none">
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