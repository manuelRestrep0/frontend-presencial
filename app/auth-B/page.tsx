'use client'

import { Container, Link, TextField } from "@mui/material";


export default function Login(){
    return(
        <Container>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <Link href="../" underline="hover">
            {'underline="always"'}
            </Link>
        </Container>
    );
}