import React from 'react';
import { Button, ButtonGroup, Typography } from '@material-ui/core';

interface ButtonStopProps {
    label: string;
}

const ButtonStop: React.FC<ButtonStopProps> = ({ label }) => {
    return (
        <Button variant="outlined" color="primary" style={{ margin: '4px', color: 'black' }} size="small">
            {label}
        </Button>
    );
};

export default ButtonStop;