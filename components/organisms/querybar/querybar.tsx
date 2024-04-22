'use client'
import React from "react";
import {Button, InputAdornment, Stack, TextField } from '@mui/material';

const SeachBar: React.FC = (props:any) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        props.updateQuery(event.target.value);
    };

    return ( 
        <>
            <Stack
                spacing={12}
                justifyContent="center"
                direction="row" 
                flexWrap="wrap"
                sx={{width:'50%'}}
            >
            <TextField
                label="Búsqueda por código de vuelo"
                sx={{width: '70%', colo: 'black !important'}}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">{<i className="fas fa-search"></i>}</InputAdornment> ), 
                }}
                color='primary'
                value={searchTerm}
                onChange={handleSearchChange}
                id="search"
            />

            <Button variant ="contained" sx={{width: '15%'}} color="warning">Filtrar
            </Button>
        
        </Stack>

        
        </>
    );

}