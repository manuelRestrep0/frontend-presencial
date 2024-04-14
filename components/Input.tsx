"use client";
import React from 'react';
import { useState } from 'react';


const TextInput = ({ placeholderValue }: { placeholderValue: string }) => {
  // Estado para almacenar el valor del campo de texto
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="text-input-container">     
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={ placeholderValue}
        className="input-field" // Agrega una clase para los estilos del campo de entrada
      />
      
    </div>
  );
};

export default TextInput;
