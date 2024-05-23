import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { BookingInfo } from '../interfaces';
import { getListBookings } from '../services/booking';

interface Props {
    setSelectedBooking: (booking: number) => void;
}

export default function BookingSelect({ setSelectedBooking }: Props) {
    const [selectedBookingId, setSelectedBookingId] = useState<string>("");
    const [bookingsInfo, setBookingsInfo] = useState<BookingInfo[] | null>(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const bookingsData = await getListBookings();
                setBookingsInfo(bookingsData);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    const handleChange = (event: SelectChangeEvent<string>) => {
        const selectedId = event.target.value;
        setSelectedBookingId(selectedId);
        setSelectedBooking(Number(selectedId));
    };

    return (
        <FormControl style={{ width: '100%', marginTop: 30 }}>
            <InputLabel id="label">Reserva</InputLabel>
            <Select
                labelId="label"
                id="select-booking"
                label="Reserva"
                value={selectedBookingId}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {bookingsInfo && bookingsInfo.length > 0 && (
                    bookingsInfo.map((booking) => (
                        <MenuItem key={booking.bookingId} value={String(booking.bookingId)}>
                            Reserva # {booking.bookingId} - Fecha {new Date(booking.bookingDate).toLocaleDateString()}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
}
