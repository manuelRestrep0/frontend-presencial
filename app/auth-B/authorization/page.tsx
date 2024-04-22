"use client"
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button, Typography, TextField, TablePagination, TableFooter } from '@mui/material';
import Navbar from 'components/Navbar';

const paperStyle = { padding: 20, width: "50%", margin: "7% auto", border: "1px solid #c2c2c2", borderRadius: "10px" };
const title = { fontWeight: "bold" };
const textStyle = { fontFamily: 'Roboto, sans-serif', margin: "15px 0px" };
const inputs = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

const rows = [
  {
    name: '1',
    role: '159'
  },
  {
    name: '2',
    role: '159'
  },
  {
    name: '3',
    role: '159'
  },
  {
    name: '4',
    role: '159'
  },
  {
    name: '5',
    role: '159'
  },
  {
    name: '6',
    role: '159'
  },
  {
    name: '7',
    role: '159'
  },
  {
    name: '8',
    role: '159'
  },
  {
    name: '9',
    role: '159'
  },
  {
    name: '10',
    role: '159'
  },
];

export default function Authorization() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  let results = [];
  if (!search) {
    results = rows;
  } else {
    results = rows.filter((result) => {
      const lowerCaseName = result.name.toLowerCase();
      const lowerCaseRole = result.role.toLowerCase();
      return lowerCaseName.includes(search.toLowerCase()) || lowerCaseRole.includes(search.toLowerCase());
    });
  }

  return (
    <>
      <Navbar />
      <Grid container style={paperStyle}>
        <Typography variant="h4" component="h2" sx={title}>
          Iniciar sesión
        </Typography>
        <Grid item xs={12} sx={textStyle}>
          Ingrese el Email, nombre o rol del usuario
        </Grid>
        <Grid item xs={12} style={inputs}>
          <input value={search} onChange={handleSearch} type="text" placeholder="Email, nombre o rol" style={{ width: "50%", padding: "10px" }} />
          <Button variant="contained" style={{ margin: "5px 5px" }}>
            Buscar
          </Button>
        </Grid>


        <TableContainer style={{ marginTop: "40px" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((result) => (
                <TableRow key={result.name}>
                  <TableCell component="th" scope="row">
                    {result.name}
                  </TableCell>
                  <TableCell>{result.role}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained">Editar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={results.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage} />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
