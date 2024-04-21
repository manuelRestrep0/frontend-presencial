import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Select from 'components/Button/Select';
import PassengerSelect from './PassangersModal';


export default function ContentForm() {

  const optionsFrom = [
    { value: "opcion1", label: "Manaos, Brasil" },
    { value: "opcion2", label: "Brasilia, Brasil" },
    { value: "opcion3", label: "Singapur, Singapur" }
  ];
  const optionsTo = [
    { value: "opcion1", label: "Bogotá, Colombia" },
    { value: "opcion2", label: "Brasilia, Brasil" },
    { value: "opcion3", label: "Singapur, Singapur" }
  ];

  const optionsClass = [
    { value: "opcion1", label: "Economy" },
    { value: "opcion2", label: "Business" },
    { value: "opcion3", label: "First Class" }
  ];
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', marginTop: '100px'}}>
          <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <button type="button" style={{ backgroundColor: '#3A76F8', color: '#FFFFFF', borderRadius: '5px', border: 'none', padding: '8px', width: '100px' }}><FlightTakeoffIcon/> Flights</button>
            </Grid>
          </Grid>
        </Toolbar>
        <div className="w-full" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <div className="column">
              <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="select" className="block text-gray-700 font-bold mb-2">FROM</label>
                  <Select title="Depart city" options={optionsFrom} />
              </div>
              <div>
                  <label htmlFor="select" className="block text-gray-700 font-bold mb-2">PASSENGERS</label>
                  <PassengerSelect />
              </div>
          </div>
          <div className="vertical-line" style={{width: '1px', backgroundColor: '#ccc'}}></div>
          <div className="column">
              <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="select" className="block text-gray-700 font-bold mb-2">TO</label>
                  <Select title="Where are you going?" options={optionsTo} />
              </div>
              <div>
                  <label htmlFor="select" className="block text-gray-700 font-bold mb-2">CLASS</label>
                  <Select title="Economy" options={optionsClass} />
              </div>
          </div>
          <div className="vertical-line" style={{width: '1px', backgroundColor: '#ccc'}}></div>
          <div className="column">
              <div style={{ marginBottom: '20px' }}>
                  
                  <label htmlFor="dateInput" className="block text-gray-700 font-bold mb-2">DEPART DATE:</label>
                  <input type="date" id="dateInput" name="dateInput" style={{ marginRight: '10px', padding: '5px', backgroundColor: 'whitesmoke', borderRadius: '5px', outline: 'none'}} />
                  
              </div>
              <div>
              <Grid padding={'20px'}>
                <Grid item>
                  <button type="button" style={{ backgroundColor: '#3A76F8', color: '#FFFFFF', borderRadius: '5px', border: 'none', padding: '8px', width: '150px' }}> Search flights</button>
                </Grid>
              </Grid>
              </div>
          </div>
          
      </div>


        <meta/>
      {/* <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
  
      </Typography> */}
    </Paper>
  );
}