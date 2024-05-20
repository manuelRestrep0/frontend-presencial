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

const SubmitPage: React.FC = () => {
  const router = useRouter()

  const handleContinueClick = () => {
    router.push("/reservas-a/confirm")
  }

  const handleHistoryClick = () => {
    router.push("/reservas-a/history")
  }

  const handleBackClick = () => {
    router.push("/reservas-a/")
  }

  const [passengers, setPassengers] = useState<any>([<PassengerInfo key={0} readOnly={false} />])

  const addNewPassenger = () => {
    const newPassenger = <PassengerInfo key={passengers.length} readOnly={false} />

    setPassengers([...passengers, newPassenger])
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
          {passengers.map((passenger: JSX.Element, index: number) => (
            <div key={index}>
              {index > 0 && (
                <div>
                  <Divider>Pasajero {index + 1}</Divider>
                </div>
              )}
              <div>{passenger}</div>
            </div>
          ))}
        </div>
      </Stack>
      <Box className="box" textAlign="right">
        <Button className="save" variant="contained" onClick={handleContinueClick}>
          Continuar
        </Button>
      </Box>
      <br />
      <br />
    </div>
  )
}

export default SubmitPage
