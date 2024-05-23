import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
interface TripProps {
    cityFrom: String;
    cityTo: String;
    date: string;
  }
const FloatingActionButtonExtendedSize: React.FC<TripProps> = ({ cityFrom, cityTo, date }) => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={{position: 'sticky'}}>

      <Fab variant="extended" size="small" style={{backgroundColor: "#f2f2f2", borderRadius: '10px'}}>
        <a style={{color: 'darkgrey', fontSize: 'smaller'}} >{cityFrom} > {cityTo} {date}</a>
        <HighlightOffIcon sx={{ mr: 1 }} />
      </Fab>
      {/* <Fab variant="extended" size="small" style={{backgroundColor: "#f2f2f2", borderRadius: '10px'}}>
        <a style={{color: 'darkgrey', fontSize: 'smaller'}}>London > New York 29 Feb</a>
        <HighlightOffIcon sx={{ mr: 1 }} />
      </Fab>
      <Fab variant="extended" size="small" style={{backgroundColor: "#f2f2f2", borderRadius: '10px'}}>
      <a style={{color: 'darkgrey', fontSize: 'smaller'}}> Madrid > Moscow 1 Jan</a>
        <HighlightOffIcon sx={{ mr: 1 }} />
      </Fab>
      <Fab variant="extended" size="small" style={{backgroundColor: "#f2f2f2", borderRadius: '10px'}}>
      <a style={{color: 'darkgrey', fontSize: 'smaller'}}>London >City > City Date</a>
        <HighlightOffIcon sx={{ mr: 1 }} />
      </Fab> */}
    </Box>
  );
}
export default FloatingActionButtonExtendedSize;