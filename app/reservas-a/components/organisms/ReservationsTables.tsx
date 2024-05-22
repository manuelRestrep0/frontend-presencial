import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import React, { useEffect, useState } from "react"
import TableCellContent from "../atoms/texts/TableCellContent"
import Booking from "app/reservas-a/api/booking/interface/booking"
import { getBookings } from "app/reservas-a/api/booking/endpoints/read"

const ReservationsTable: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    getBookings()
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error obtaining bookings", error))
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ bgcolor: "#B9B9C4" }}>
          <TableRow>
            <TableCellContent align="center" text="Código Reserva" />
            <TableCellContent align="center" text="Código Vuelo" />
            <TableCellContent align="center" text="Destinos" />
            <TableCellContent align="center" text="Salida" />
            <TableCellContent align="center" text="Llegada" />
            <TableCellContent align="center" text="Estado de la Reserva" />
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.bookingId}>
              <TableCell align="center">{booking.bookingId}</TableCell>
              <TableCell align="center">{booking.flightId}</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">{booking.booking_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReservationsTable
