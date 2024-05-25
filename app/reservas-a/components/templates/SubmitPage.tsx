"use client"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import AddPassengerButton from "../atoms/buttons/AddPassengerButton"
import SectionTitle from "../atoms/texts/SectionTitle"
import SitasAppBar from "../molecules/SitasAppBar"
import PassengerInfo from "../organisms/PassengerInfo"
import { Person } from "app/reservas-a/api/person/interface/person"
import Typography from "@mui/material/Typography"
import ErrorDialog from "../molecules/ErrorDialog"

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

  const [isFormValid, setIsFormValid] = useState(false)
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false)

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

  const validatePassengers = () => {
    for (const passenger of passengers) {
      if (
        passenger.name === "" ||
        passenger.lastname === "" ||
        passenger.email === "" ||
        passenger.phone === "" ||
        passenger.address === "" ||
        passenger.contactName === "" ||
        passenger.contactLastname === "" ||
        passenger.contactPhone === ""
      ) {
        return false
      }
    }
    return true
  }

  const handleSubmit = () => {
    if (!validatePassengers()) {
      setIsErrorDialogOpen(true)
      return
    }

    localStorage.setItem("passengersToConfirm", JSON.stringify(passengers))

    router.push("/reservas-a/confirm")
  }

  useEffect(() => {
    const isValid = validatePassengers()
    setIsFormValid(isValid)
    if (isValid) {
      setIsErrorDialogOpen(false)
    }
  }, [passengers])

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
        <Button className="save" variant="contained" onClick={handleSubmit} id="btn-con">
          Continuar
        </Button>
      </Box>
      <br />
      <br />
      <ErrorDialog
        open={isErrorDialogOpen}
        onClose={() => setIsErrorDialogOpen(false)}
        message="Por favor, complete todos los campos antes de continuar."
      />
    </div>
  )
}

export default SubmitPage
