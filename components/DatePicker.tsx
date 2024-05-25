import * as React from 'react';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BasicDatePicker = ({ onDateChange }:any) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
    onDateChange(date); // Llamando a onDateChange como una función
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Basic date picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDatePicker;