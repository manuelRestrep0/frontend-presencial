import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface CheckboxOptionProps {
    label: string;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ label }) => {
    return (
        <FormControlLabel
            control={<Checkbox />}
            label={label}
        />
    );
};

export default CheckboxOption;