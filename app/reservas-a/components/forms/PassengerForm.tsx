import React from 'react'
import Image from 'next/image'
import Input from '../atoms/Input'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import '../../styles/forms/PassengerFormStyle.css'

function PassengerForm() {
  return (
    <div className="App" >
      <div className='title'>
        <p >
          Ingresar información del pasajero
        </p>

      </div>
      <br></br>
      <br></br>
      <Stack spacing={60} direction='row' justifyContent='center'>
        <Stack spacing={1} direction='column'>
          <Input title={"Nombre"} />
          <Input title={"Apellidos"} />
          <Input title={"Correo"} />
          <Input title={"Teléfono"} />
          <Input title={"Dirección en caso de pérdida de equipaje"} />
        </Stack>
        <Stack spacing={1} direction='column' alignItems='center'>
          <p><strong>Contacto de emergencia: </strong></p>
          <p>Es necesario un contacto de emergencia</p>
          <Input title={"Nombre"} />
          <Input title={"Apellidos"} />
          <Input title={"Teléfono"} />
        </Stack>
      </Stack>
      <Box className='box' textAlign='right' >
        <Button className='save' variant="contained">Guardar</Button>
      </Box>



    </div>
  )
}

export default PassengerForm