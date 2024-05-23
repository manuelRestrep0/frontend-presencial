import PersonIcon from '@mui/icons-material/Person';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { PassengerInfo } from '../interfaces';
import { getListPassengers } from '../services/passenger';

export default function Passenger() {
  const [passengers, setPassengers] = useState<PassengerInfo[]>([]);
  const [randomPassengers, setRandomPassengers] = useState<PassengerInfo[]>([]);

  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        const passengerData = await getListPassengers();
        setPassengers(passengerData || []);
      } catch (error) {
        console.error('Error fetching passengers:', error);
      }
    };
    fetchPassengers();
  }, []);

  useEffect(() => {
    if (passengers.length > 0) {
      const selectRandomPassengers = () => {
        const selectedPassengers: PassengerInfo[] = [];
        const passengerCount = passengers.length;

        if (passengerCount <= 4) return passengers;

        const randomIndexes = new Set<number>();
        while (randomIndexes.size < 4) {
          const randomIndex = Math.floor(Math.random() * passengerCount);
          randomIndexes.add(randomIndex);
        }

        randomIndexes.forEach((index) => {
          const passenger = passengers[index];
          if (passenger) selectedPassengers.push(passenger);
        });
        return selectedPassengers;
      };

      setRandomPassengers(selectRandomPassengers());
    }
  }, [passengers]);

  return (
    <>
      <Box sx={{ bgcolor: '#cfe8fc', width: '100%', height: '60vh', margin: 1, borderRadius: '10px', pl: '20px', pt: '20px' }}>
        <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
          Pasajeros
        </Typography>

        {randomPassengers.length > 0 && randomPassengers.map((passenger, index) => (
          <Typography key={index} component="div" style={{ marginTop: 15 }}>
            <PersonIcon /> {passenger.name} -  Asiento <FlightClassIcon />{passenger.seat}
          </Typography>
        ))}
      </Box>
      <hr />
    </>
  );
}
