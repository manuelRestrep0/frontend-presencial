"use client"
import Divider from "@mui/material/Divider"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { Person } from "app/reservas-a/api/person/interface/person"
import SectionTitle from "../atoms/texts/SectionTitle"
import SitasAppBar from "../molecules/SitasAppBar"
import PassengerInfo from "../organisms/PassengerInfo"
import EventDialog from "../molecules/EventDialog"

const ConfirmationPage: React.FC = () => {
  const router = useRouter()

  const [passengers, setPassengersData] = useState<Person[]>([])

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const dataString = localStorage.getItem("passengersToConfirm")
    if (dataString) {
      const data = JSON.parse(dataString) as Person[]
      setPassengersData(data)
    }
  }, [])

  const handleConfirmClick = () => {
    setIsDialogOpen(true)
  }

  const handleSuccessDialogClose = () => {
    setIsDialogOpen(false)
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
      <SectionTitle text="Confirmar Datos" id="confirm-title"/>
      <Divider></Divider>
      <br></br>
      <br></br>
      <div className="mb-6">
        {passengers.map((passenger: Person, index: number) => (
          <div key={index}>
            {index > 0 && (
              <div>
                <Divider>Pasajero {index + 1}</Divider>
              </div>
            )}
            <PassengerInfo data={passenger} onDataChange={(e, field) => {}} readOnly={true} />
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full bg-white p-4">
        <hr className="mb-4" />
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-bold">Reserva #0000</h1>
            <h3 className="text-sm">Estado de la Reserva: SIN PAGAR</h3>
          </div>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={handleConfirmClick}
            id="btn-cfr"
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
      <EventDialog
        open={isDialogOpen}
        onClose={handleSuccessDialogClose}
        title="¡Reserva Exitosa!"
        message="Se ha registrado con exito la reserva."
      />
    </div>
  )
}

export default ConfirmationPage
