"use client"
import { Button,Grid, MenuItem,Paper, Select, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead,TablePagination,TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from 'components/Navbar';

const paperStyle = { padding: 20, width: "50%", margin: "7% auto", border: "1px solid #c2c2c2", borderRadius: "10px" };
const title = { fontWeight: "bold" };
const textStyle = { fontFamily: 'Roboto, sans-serif', margin: "15px 0px" };
const inputs = { display: 'flex', alignItems: 'center'};
const select = { height: "40px"};

const rows = [
  { id : 0,
    name: 'John',
    role: 'administrador',
    email: 'Johnyelpapa@gmail.com'
  },
  {
    id : 1,
    name: 'Juan',
    role: 'usuario',
    email: 'Juan@gmail.com'
  },
  {
    id : 2,
    name: 'Susana',
    role: 'administrador',
    email: 'Susana@gmail.com'
  },
  {
    id : 3,
    name: 'Pedro',
    role: 'usuario',
    email: 'Pedro@gmail.com'
  },
  {
    id : 4,
    name: 'Pablo',
    role: 'usuario',
    email: 'Pablo@gmail.com'
  },
  {
    id : 5,
    name: 'Sara',
    role: 'usuario',
    email:'Sara@gmail.com'
  },
  {
    id : 6,
    name: 'Kevin',
    role: 'usuario',
    email: 'Kevin@gmail.com'
  },
  {
    id : 7,
    name: 'Luis',
    role: 'usuario',
    email: 'Luis@gmail.com'
  },
  {
    id : 8,
    name: 'Maria',
    role: 'usuario',
    email: 'Maria@gmail.com'
  },
  {
    id : 9,
    name: 'Jose',
    role: 'usuario',
    email: 'Jose@gmail.com'
  },
];

let results: { id: number; name: string; role: string; email: string; }[] = [];

export default function Authorization() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [editingUserId, setEditingUserId] = useState(null); // Nuevo estado para el ID de usuario en edición

  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  };

  const handleEditClick = (userId: number | null) => {
    setEditingUserId(userId as null); // Explicitly cast userId to null
  };
  
  

  const handleSaveClick = (userId: number, newRole: string) => {
    if (results && results.length > 0) {
        const user = results.find(user => user.id === userId);
        if (user) {
            user.role = newRole;
            console.log(`Guardando nuevo rol ${newRole} para el usuario con ID ${userId}`);
            setEditingUserId(null);
        } else {
            console.error(`Error: User with ID ${userId} not found.`);
        }
    } else {
        console.error('Error: Results array is empty or undefined.');
    }
};


  if (!search) {
    results = rows;
  } else {
    results = rows.filter((result) => {
      const lowerCaseName = result.name.toLowerCase();
      const lowerCaseRole = result.role.toLowerCase();
      const lowerCaseEmail = result.email.toLowerCase();
      return lowerCaseName.includes(search.toLowerCase()) || lowerCaseRole.includes(search.toLowerCase()) || lowerCaseEmail.includes(search.toLowerCase());
    });
  }

  return (
    <>
      <Navbar />
      <Grid container style={paperStyle}>
        <Typography variant="h4" component="h2" sx={title}>
          Busqueda de Usuarios
        </Typography>
        <Grid item xs={12} sx={textStyle}>
          Ingrese el Email, nombre o rol del usuario
        </Grid>
        <Grid item xs={12} style={inputs}>
          <TextField value={search} onChange={handleSearch} type="text" placeholder="Email, nombre o rol" style={{ width: "60%", padding: "10px" }} />
        </Grid>

        <TableContainer style={{ marginTop: "40px" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((result) => (
                <TableRow key={result.id}>
                  <TableCell component="th" scope="row" sx={textStyle}>
                    {result.name}
                  </TableCell>
                  <TableCell sx={textStyle} >{result.email}</TableCell>
                  <TableCell>
                    {editingUserId === result.id ? ( 
                      <Select
                        
                        style={select}
                        value={result.role}
                        onChange={(e) => handleSaveClick(result.id, e.target.value)}
                      >
                        <MenuItem value={'usuario'}>usuario</MenuItem>
                        <MenuItem value={'administrador'}>administrador</MenuItem>

                      </Select>
                    ) : (
                      result.role
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editingUserId !== result.id && ( 
                      <Button variant="contained" onClick={() => handleEditClick(result.id)}>
                        Editar
                      </Button>
                    )}
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
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}