import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
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