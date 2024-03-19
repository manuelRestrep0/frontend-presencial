'use client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PaidIcon from '@mui/icons-material/Paid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AppBar, Toolbar, IconButton, Typography, TextField } from '@material-ui/core';
import Link from 'next/link';

export default function Reserva() {
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen max-h-screen">
            <AppBar position="static" className="flex flex-row w-screen justify-center items-center">
                <Toolbar className='flex flex-row w-full items-center justify-between'>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <AccountCircleIcon />
                    </IconButton>
                    <Typography variant="h6" className="text-center flex-grow">
                        Reservas
                    </Typography>
                    <IconButton edge="end" color="inherit">
                        <Link href="/reservaB/formReservaB">
                            <AddCircleOutlineIcon />
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <section className="flex flex-row justify-start items-center w-10/12 h-8 mb-8 pt-10">
                <div className="flex flex-col justify-center items-center w-3/12 h-full pl-5">
                    <TextField
                        label="Consulta"
                        variant="outlined"
                        size="small"
                        fullWidth
                        className="text-xs"
                    />
                </div>
            </section>

            <div className="flex flex-col justify-start items-center w-screen h-screen max-h-screen">
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

        </div>
    )

}
const columns: GridColDef[] = [

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'destino', headerName: 'Destino', width: 130 },
    { field: 'others', headerName: '...', width: 130 },
    {
        field: 'fecha',
        headerName: 'Fecha',
        type: 'date',
        width: 90,
        valueGetter: (params) => new Date(params.value),
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100

    },
    {
        field: 'pago',
        headerName: 'Pago',
        width: 100,
        renderCell: (params) => (
            <PaidIcon
                onClick={() => {
                    console.log(`Pagar el registro con ID ${params.row.id}`);
                }}
                style={{ cursor: 'pointer' }}
            />
        ),

    },
    {
        field: 'editar',
        headerName: 'Editar',
        width: 100,
        renderCell: (params) => (
            <EditNoteIcon
                onClick={() => {
                    console.log(`Editar el registro con ID ${params.row.id}`);
                }}
                style={{ cursor: 'pointer' }}
            />
        ),

    },
    {
        field: 'eliminar',
        headerName: 'Eliminar',
        width: 100,
        renderCell: (params) => (
            <DeleteIcon
                onClick={() => {
                    console.log(`Eliminar el registro con ID ${params.row.id}`);
                }}
                style={{ cursor: 'pointer' }}
            />
        ),
    },
];

const rows = [
    { id: 1, destino: 'Francia', others: '...', fecha: '2/04/2024', status: 'Por pagar', pago: 'pago', editar: <EditNoteIcon />, eliminar: <DeleteIcon /> },
]
