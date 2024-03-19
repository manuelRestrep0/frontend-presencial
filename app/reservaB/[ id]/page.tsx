'use client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import PaidIcon from '@mui/icons-material/Paid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { AppBar, Toolbar, IconButton, Typography, TextField } from '@material-ui/core';
import Link from 'next/link';

export default function Web() {
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen max-h-screen">
            <AppBar position="static" className="flex flex-row w-screen justify-center items-center">
                <Toolbar className='flex flex-row w-full items-center justify-between'>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Link href="/reservaB">
                            <AccountCircleIcon />
                        </Link>

                    </IconButton>
                    <Typography variant="h6" className="text-center flex-grow">
                        Reservas
                    </Typography>
                    <IconButton edge="end" color="inherit">
                        <Link href="#">
                            <EditNoteRoundedIcon />
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="flex flex-col justify-start items-center w-screen h-96 max-h-screen mt-10">
                <h1 className='flex fle-row w-full justify-center items-center text-xl mb-5'>Datos</h1>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            <Stack direction="row" spacing={10} className='mt-10'>
                <Button className='w-20 h-10 ' variant="contained" color="primary">Pagar</Button>
                <Button className='w-20 h-10' variant="contained" color="primary">Asiento</Button>
                <Button className='w-20 h-10' variant="contained" color="primary">Equipaje</Button>
            </Stack>
        </div>


    )
}

const columns: GridColDef[] = [
    { field: 'destino', headerName: 'Destino', width: 200 },
    { field: 'others', headerName: '...', width: 200 },
    { field: 'fecha', headerName: 'Fecha', width: 200 },
];

const rows = [
    { id: 1, destino: 'Francia', others: '...', fecha: '2/04/2024' },
]