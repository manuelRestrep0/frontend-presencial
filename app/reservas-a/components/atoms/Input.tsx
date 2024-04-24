import React from 'react'
import TextField from '@mui/material/TextField'

interface Props {
  title: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ title, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Llamamos a la función onChange con el nuevo valor del input
    onChange(event.target.value);
  };

  return (
    <TextField
      id="outlined-input"
      label={title}
      style={{ width: '150%', margin: '5%' }}
      onChange={handleChange} // Utilizamos nuestra función handleChange
    />
  );
}

export default Input;