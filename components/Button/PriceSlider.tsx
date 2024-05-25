import React, { useState } from 'react';
import { Slider } from '@mui/material';

const PriceSlider = () => {
    const [value, setValue] = useState([50, 150]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={300}
            style={{ width: '100%', color: '#6B9EFF' }} // Puedes cambiar el color aquí
        />
    );
};

export default PriceSlider;

{/*
Primer input
<input id='min-price' type="number" style={{ marginRight: '5px', width: '100px', padding: '5px' }}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMinPrice(parseInt(event.target.value))}
/>
Separador
<span style={{ margin: '0 5px' }}>-</span>
Segundo input
<input type="number" style={{ marginLeft: '5px', width: '100px', padding: '5px' }}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMaxPrice(parseInt(event.target.value))}
/>
*/}
