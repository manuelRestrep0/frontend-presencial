"use client"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { Person } from "app/reservas-a/api/person/interface/person"
import AddPassengerButton from "../atoms/buttons/AddPassengerButton"
import SectionTitle from "../atoms/texts/SectionTitle"
import EventDialog from "../molecules/EventDialog"
import SitasAppBar from "../molecules/SitasAppBar"
import PassengerInfo from "../organisms/PassengerInfo"

const SubmitPage: React.FC = () => {
  const router = useRouter()

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

  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [dialogId, setDialogId] = useState("")

  const handleHistoryClick = () => {
    router.push("/reservas-a/history")
  }

  const handleBackClick = () => {
    router.push("/reservas-a/")
  }

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
    const allPassengersHaveData = passengers.every(
      (passenger) =>
        passenger.name !== "" &&
        passenger.lastname !== "" &&
        passenger.email !== "" &&
        passenger.phone !== "" &&
        passenger.address !== ""
    )

    if (!allPassengersHaveData) {
      setMessageError("Por favor, complete todos los campos antes de continuar.")
      setDialogId("pinfo-dialog")
      return false
    }

    const oneEmergencyContact = passengers.some(
      (passenger) => passenger.contactName !== "" && passenger.contactLastname !== "" && passenger.contactPhone !== ""
    )

    if (!oneEmergencyContact) {
      setMessageError("No olvide completar los datos de contacto del contacto de emergencia.")
      setDialogId("cinfo-dialog")
      return false
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
    if (isValid) {
      setIsErrorDialogOpen(false)
    }
  }, [passengers])

  return (
    <div>
      <SitasAppBar onHistoryClick={handleHistoryClick} onBackClick={handleBackClick} />
      <br></br>
      <br></br>
      <SectionTitle text="Ingresar informacion del pasajero" id="form-title" />
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
      <EventDialog
        open={isErrorDialogOpen}
        onClose={() => setIsErrorDialogOpen(false)}
        title="Error"
        message={messageError}
        baseId={dialogId}
      />
    </div>
  )
}

export default SubmitPage
