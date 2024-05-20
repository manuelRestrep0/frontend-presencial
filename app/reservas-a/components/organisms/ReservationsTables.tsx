import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import React from "react"
import TableCellContent from "../atoms/texts/TableCellContent"

const ReservationsTable: React.FC = () => {
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
          <TableRow>
            <TableCell align="center">Reserva #0000</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">SIN PAGAR</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReservationsTable
