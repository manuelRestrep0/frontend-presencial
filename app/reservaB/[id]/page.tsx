'use client'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FlightIcon from '@mui/icons-material/Flight';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'origin',
        headerName: 'Origen',
        width: 130,
        renderCell: (params: any) => (
            <div>
                <FlightTakeoffIcon color="primary" />
                {params.value}
            </div>
        ),
    },

    {
        field: 'destination',
        headerName: 'Destino',
        width: 130,
        renderCell: (params: any) => (
            <div>
                <FlightLandIcon color="primary" />
                {params.value}
            </div>
        ),
    },
    {
        field: 'departureDate',
        headerName: 'Fecha de Salida',
        width: 130,
        renderCell: (params: any) => (
            <div>

                {params.value}
            </div>
        ),
    },
    {
        field: 'passengers',
        headerName: 'Pasajeros',
        width: 130,
        renderCell: (params: any) => (
            <div>

                {params.value}
            </div>
        ),
    },
    {
        field: 'status',
        headerName: 'Estado',
        width: 130,
        renderCell: (params: any) => (
            <div>

                {params.value}
            </div>
        ),
    },
    {
        field: 'modify ',
        headerName: 'Modificar',
        width: 130,
        renderCell: (params: any) => (
            <div>
                <EditIcon color="primary" />
                {params.value}
            </div>
        ),
    },
    {
        field: 'cancel',
        headerName: 'Cancelar',
        width: 130,
        renderCell: (params: any) => (
            <div>
                <CancelIcon color="primary" />
                {params.value}
            </div>
        ),
    },
    // Resto de las columnas...
];
function MenuAppBar({ anchorEl, open, handleClose }: any) {
    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
        >
            <Typography variant="h6" component="div" sx={{ padding: '10px 16px' }}>
                Singapur Airlines
            </Typography>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <AccountBoxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Mi cuenta</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <FlightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Vuelos</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <EventNoteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Reservas</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <CheckCircleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Check-in</ListItemText>
            </MenuItem>
        </Menu>
    );
}

interface FormDialogProps {
    open: boolean;
    handleClose: () => void;
    handleSave: (newRow: { id: string; origin: string; destination: string; departureDate: string; passengers: string; status: string }) => void;
}

function FormDialog({ open, handleClose, handleSave }: FormDialogProps) {
    const [newRow, setNewRow] = React.useState({ id: '', origin: '', destination: '', departureDate: '', passengers: '', status: '' });

    const handleChange = (e: any) => {

        setNewRow({ ...newRow, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        handleSave(newRow);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agregar Reserva</DialogTitle>
            <DialogContent>
                <TextField name="id" label="ID" value={newRow.id} onChange={handleChange} fullWidth />
                <TextField name="origin" label="Origen" value={newRow.origin} onChange={handleChange} fullWidth />
                <TextField name="destination" label="Destino" value={newRow.destination} onChange={handleChange} fullWidth />
                <TextField name="departureDate" label="Fecha de Salida" value={newRow.departureDate} onChange={handleChange} fullWidth />
                <TextField name="passengers" label="Pasajeros" value={newRow.passengers} onChange={handleChange} fullWidth />
                <TextField name="status" label="Estado" value={newRow.status} onChange={handleChange} fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleSubmit}>Guardar</Button>
            </DialogActions>
        </Dialog>
    );
}

function ReservationsTable({ rows }: any) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                /*pageSize={5}
                rowsPerPageOptions={[5]}*/
                checkboxSelection
            />
        </div>
    );
}


export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [openForm, setOpenForm] = React.useState(false);
    const [rows, setRows] = React.useState([
        { id: 1, origin: 'Madrid', destination: 'Barcelona', departureDate: '2022-01-01', passengers: 2, status: 'Confirmed' },
        // Agrega más filas según sea necesario
    ]);
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    const handleSave = (newRow: any) => {
        setRows([...rows, newRow]);
    };


    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <section className="flex justify-center items-center">
                <AppBar position="static" sx={{ flexGrow: 1 }} >
                    <Toolbar>
                        <Box sx={{ width: '33.33%' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                        <Box sx={{ width: '33.33%', textAlign: 'center' }}>
                            <Typography variant="h6" component="div">
                                Reservas
                            </Typography>
                        </Box>
                        <Box sx={{ width: '33.33%', textAlign: 'end' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                    </Toolbar>
                    <MenuAppBar anchorEl={anchorEl} open={Boolean(anchorEl)} handleClose={handleCloseMenu} />
                </AppBar>
            </section>
            <section className="flex flex-col justify-center items-center">
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h6" component="div" sx={{ padding: '10px 16px' }}>
                        Tus Reservas
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ padding: '10px 16px' }}>
                        Aquí puedes ver las reservas realizadas y su estado
                    </Typography>
                    <Box sx={{ textAlign: 'right', padding: '10px 16px' }} className="w-full">
                        <Button variant="text" color="primary" onClick={handleOpenForm}>
                            Nueva Reserva
                        </Button>
                    </Box>
                    <div className="flex justify-center w-full">
                        <ReservationsTable rows={rows} />
                    </div>
                    <FormDialog open={openForm} handleClose={handleCloseForm} handleSave={handleSave} />
                </Box>
            </section>
        </Box>
    );
}