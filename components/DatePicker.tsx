import React, { useState } from 'react';
import styled from 'styled-components';

const DatePickerInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: #3f51b5;
  }
`;

const DatePickerLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  display: block;
`;

const DatePickerComponent = ({onDateChange}:any) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e:any) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    onDateChange(newDate); // Llamar a la función prop onDateChange con la nueva fecha
  };

  return (
    <div>
      <DatePickerLabel>Selecciona una fecha</DatePickerLabel>
      <DatePickerInput
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        pattern="\\d{4}-\\d{2}-\\d{2}"
      />
    </div>
  );
};

export default DatePickerComponent;