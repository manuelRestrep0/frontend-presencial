import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

export default function BestResults() {
    return (
        <Paper style={{
            backgroundColor: '#D7E2EE',
            borderRadius: '8px',
            marginTop: '20px',
            marginLeft: '20px',
            marginRight: '20px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid black'
        }}>
            <Grid container spacing={3}>
                {/* Casilla 1 */}
                <Grid item xs={4}>
                    <Typography variant="h6">Cheapest</Typography>
                    <Typography variant="body1">$90 . 3 h 50 min</Typography>
                </Grid>

                {/* Casilla 2 */}
                <Grid item xs={4}>
                    <Typography variant="h6">Best</Typography>
                    <Typography variant="body1">$100 . 2 h 55 min</Typography>
                </Grid>

                {/* Casilla 3 */}
                <Grid item xs={4}>
                    <Typography variant="h6">Quickest</Typography>
                    <Typography variant="body1">$160 . 2 h 30 min</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
