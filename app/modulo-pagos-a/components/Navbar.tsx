import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function NavbarCustom(){

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
                    <Typography variant="h6" color="inherit" component="div" style={{ fontStyle : "italic" }}>
                        Aerolíneas
                    </Typography>
                    <FlightTakeoffIcon />
                </Toolbar>
            </AppBar>
        </Box>
    )
}