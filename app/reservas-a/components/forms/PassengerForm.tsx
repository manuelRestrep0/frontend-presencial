"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import Input from '../atoms/Input'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import '../../styles/forms/PassengerFormStyle.css'
import useFormData from 'app/reservas-a/hooks/useFormData'
import axios from 'axios'

function PassengerForm() {

  const [namePassenger, setNamePassenger] = useState('')
  const [lastnamePassenger, setLastNamePassenger] = useState('')
  const [emailPassenger, setEmailPassenger] = useState('')
  const [phoneNumberPassenger, setPhoneNumberPassenger] = useState('')
  const [addressPassenger, setAddressPassenger] = useState('')
  const [nameContact, setNameContact] = useState('')
  const [lastnameContact, setLastNameContact] = useState('')
  const [phoneNumberContact, setPhoneNumberContact] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(emailPassenger)
    try {
      await axios.post('http://localhost:8080/v1/passenger/save',
        {
          passengerName: namePassenger,
          passengerLastName: lastnamePassenger,
          passengerEmail: emailPassenger, 
          passengerPhoneNumber: phoneNumberPassenger,
          passengerAddress: addressPassenger,
          contactName: nameContact,
          contactPhoneNumber: phoneNumberContact,
          contactLastName: lastnameContact,
        }
      )
    } catch (error) {
      alert('Esta función solo esta disponible en local')
    }
  }

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
            <Input onChange={setNamePassenger} title={"Nombre"} />
            <Input onChange={setLastNamePassenger} title={"Apellidos"} />
            <Input onChange={setEmailPassenger} title={"Correo"} />
            <Input onChange={setPhoneNumberPassenger} title={"Teléfono"} />
            <Input onChange={setAddressPassenger} title={"Dirección en caso de pérdida de equipaje"} />
          </Stack>
          <Stack spacing={1} direction='column' alignItems='center'>
            <p><strong>Contacto de emergencia: </strong></p>
            <p>Es necesario un contacto de emergencia</p>
            <Input onChange={setNameContact} title={"Nombre"} />
            <Input onChange={setLastNameContact} title={"Apellidos"} />
            <Input onChange={setPhoneNumberContact} title={"Teléfono"} />
          </Stack>
        </Stack>
        <Box className='box' textAlign='right' >
          <Button className='save' variant="contained" onClick={handleSubmit}>Guardar</Button>
        </Box>


    </div>
  )
}

export default PassengerForm