"use client"
import React from 'react';
import Navbar from 'components/Navbar';
import VerticalTabs from 'components/VerticalTabs';
import { Avatar, Button,Container,Divider,Grid, MenuItem,Paper,Stack, TextField, Typography } from '@mui/material';

const paperStyle = { padding: 0, margin: "7% auto", border: "1px solid #c2c2c2", borderRadius: "10px", width: '50%'};

const user = {
    id : 1,
    name: 'Juan',
    role: 'usuario',
    email: 'Juan@gmail.com'
  } 

  export default function ProfileDashboard() {
    
  return (

    <>
    <Navbar />
    <Container style={paperStyle}>
    <VerticalTabs />
    </Container>
    </>
  );
  }