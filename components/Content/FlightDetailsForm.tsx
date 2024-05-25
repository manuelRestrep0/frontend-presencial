import React from 'react';
import { TextField, Grid, Box } from '@material-ui/core';

export default function FlightDetailsForm() {
  return (
    <Box ml={3}> {/* Añade un margen a la izquierda */}
      <Grid container spacing={1} style={{ backgroundColor: '#6B9EFF', borderRadius: '8px', padding: '10px', marginTop: '20px' }}>
        <Grid item xs={3}>
          <TextField id="from-to" label="FROM - TO" variant="outlined" InputLabelProps={{ style: { color: '#000' } }} InputProps={{ style: { backgroundColor: 'white', fontSize: 'small' } }} fullWidth />
        </Grid>
        <Grid item xs={3}>
          <TextField id="depart-date" label="DEPART DATE" type="date" variant="outlined" InputLabelProps={{ shrink: true, style: { color: '#000' } }} InputProps={{ style: { backgroundColor: 'white', fontSize: 'small' } }} fullWidth />
        </Grid>
        <Grid item xs={3}>
          <TextField id="passengers" label="PASSENGERS" variant="outlined" InputLabelProps={{ style: { color: '#000' } }} InputProps={{ style: { backgroundColor: 'white', fontSize: 'small' } }} fullWidth />
        </Grid>
        <Grid item xs={3}>
          <TextField id="class" label="CLASS" variant="outlined" InputLabelProps={{ style: { color: '#000' } }} InputProps={{ style: { backgroundColor: 'white', fontSize: 'small' } }} fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
}
