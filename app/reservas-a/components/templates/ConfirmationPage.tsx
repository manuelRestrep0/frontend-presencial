"use client"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import { useRouter } from "next/navigation"
import React from "react"
import SectionTitle from "../atoms/texts/SectionTitle"
import SitasAppBar from "../molecules/SitasAppBar"
import PassengerInfo from "../organisms/PassengerInfo"

const ConfirmationPage: React.FC = () => {
  const router = useRouter()

  const handleConfirmClick = () => {
    router.push("/reservas-a/history")
  }

  const handleHistoryClick = () => {
    router.push("/reservas-a/history")
  }

  const handleBackClick = () => {
    router.push("/reservas-a")
  }

  return (
    <div>
      <SitasAppBar onHistoryClick={handleHistoryClick} onBackClick={handleBackClick} />
      <br></br>
      <br></br>
      <SectionTitle text="Confirmar Datos" />
      <Divider></Divider>
      <br></br>
      <br></br>

      <PassengerInfo readOnly={true} />
      <Box className="box" textAlign="right"></Box>
      <br />
      <br />
      <div className="Footer">
        <Divider></Divider>
        <div className="Bottom">
          <br />
          <Stack spacing={50} direction="row">
            <Stack spacing={-0.1} direction="column">
              <h1>Reserva #0000</h1>
              <h3>Estado de la Reserva: SIN PAGAR</h3>
            </Stack>
            <Button variant="contained" onClick={handleConfirmClick}>
              Confirmar Reserva
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage
