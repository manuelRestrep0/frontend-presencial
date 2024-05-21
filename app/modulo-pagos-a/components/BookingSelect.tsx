import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useMemo, useState } from 'react';
import { BookingInfo} from '../interfaces';
import { getListBookings } from '../services/booking';

interface Props {
    setSelectedBooking: (booking: number) => void;
}

export default function BookingSelect({ setSelectedBooking }: Props) {

    const [selectedBookingId, setSelectedBookingId] = useState<"" | { value: string } | undefined>("");
    const [bookingsInfo, setBookingsInfo] = useState<BookingInfo[] | null>(null);

    useMemo(() => {
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

    const handleChange = (event: SelectChangeEvent<{ value: string }>) => {
        const selectedId = event.target.value as string;
        setSelectedBookingId(selectedId !== "" ? { value: selectedId } : undefined);
        setSelectedBooking(Number(selectedId));
    };

    return (
        <FormControl style={{ width: '80%', marginTop: 30 }}>
            <InputLabel id="label">Reserva</InputLabel>
            <Select
                labelId="label"
                id="select-booking"
                label="Booking"
                value={selectedBookingId}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {bookingsInfo && bookingsInfo.length > 0 && (
                    bookingsInfo.map((bookings, index) => (
                        <MenuItem key={bookings.bookingId} value={bookings.bookingId} id={`${index}-booking`}>
                            Reserva # {bookings.bookingId} - Fecha {new Date(bookings.bookingDate).toLocaleDateString()}
                        </MenuItem>
                    )))}
            </Select>
        </FormControl>
    );
}
