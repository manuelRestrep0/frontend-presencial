import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function ContentForm() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', marginTop: '100px'}}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add user
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className="w-64">
        <label htmlFor="select" className="block text-gray-700 font-bold mb-2">FROM:</label>
        <div className="relative" >
            <select id="select" name="select" className="block appearance-none w-full bg-gray-100 border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled selected>Depart city</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L6 8h8l-4 4z"/></svg>
            </div>
        </div>
        </div>
        <meta/>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        No users for this project yet
      </Typography>
    </Paper>
  );
}