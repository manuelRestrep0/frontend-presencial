"use client"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import AddPassengerButton from "../atoms/buttons/AddPassengerButton"
import SectionTitle from "../atoms/texts/SectionTitle"
import SitasAppBar from "../molecules/SitasAppBar"
import PassengerInfo from "../organisms/PassengerInfo"
import { Person } from "app/reservas-a/api/person/interface/person"

const SubmitPage: React.FC = () => {
  const router = useRouter()

  const handleHistoryClick = () => {
    router.push("/reservas-a/history")
  }

  const handleBackClick = () => {
    router.push("/reservas-a/")
  }

  const [passengers, setPassengers] = useState<Person[]>([
    {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      contactName: "",
      contactLastname: "",
      contactPhone: "",
    },
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof Person) => {
    const { value } = e.target
    setPassengers((prevData) => {
      const newData = [...prevData]
      newData[index] = {
        ...newData[index],
        [field]: value,
      } as Person
      return newData
    })
  }

  const addNewPassenger = () => {
    const newPassenger = {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      contactName: "",
      contactLastname: "",
      contactPhone: "",
    }

    setPassengers([...passengers, newPassenger])
  }

  const handleSubmit = () => {
    localStorage.setItem("passengersToConfirm", JSON.stringify(passengers))

    router.push("/reservas-a/confirm")
  }

  return (
    <div>
      <SitasAppBar onHistoryClick={handleHistoryClick} onBackClick={handleBackClick} />
      <br></br>
      <br></br>
      <SectionTitle text="Ingresar información del pasajero" />
      <Divider></Divider>
      <br></br>
      <br></br>
      <AddPassengerButton onClick={addNewPassenger} />
      <Stack>
        <div>
          {passengers.map((passenger: Person, index: number) => (
            <div key={index}>
              {index > 0 && (
                <div>
                  <Divider>Pasajero {index + 1}</Divider>
                </div>
              )}
              <PassengerInfo
                data={passenger}
                onDataChange={(e, field) => handleChange(e, index, field)}
                readOnly={false}
              />
            </div>
          ))}
        </div>
      </Stack>
      <Box className="box" textAlign="right">
        <Button className="save" variant="contained" onClick={handleSubmit} id='btn-con'>
          Continuar
        </Button>
      </Box>
      <br />
      <br />
    </div>
  )
}

export default SubmitPage
