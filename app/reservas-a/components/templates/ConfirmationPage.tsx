"use client"
import Divider from "@mui/material/Divider"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { postBooking } from "app/reservas-a/api/booking/endpoints/post"
import { postBookingPassenger } from "app/reservas-a/api/bookingPassenger/endpoints/post"
import { postPassenger } from "app/reservas-a/api/passenger/endpoints/post"
import { postPerson } from "app/reservas-a/api/person/endpoints/post"
import { Person } from "app/reservas-a/api/person/interface/person"
import SectionTitle from "../atoms/texts/SectionTitle"
import EventDialog from "../molecules/EventDialog"
import SitasAppBar from "../molecules/SitasAppBar"
import PassengerInfo from "../organisms/PassengerInfo"

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

  const handleConfirmClick = async () => {
    // postBooking
    const bookingId = await postBooking({
      flightId: "1",
      booking_date: new Date().toISOString(),
      booking_status: "Pending",
      total_price: passengers.length * 100,
    })

    passengers.forEach(async (passenger) => {
      // postPerson
      const personId = await postPerson({
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        mail: passenger.mail,
        phoneNumber: passenger.phoneNumber,
        identificationType: passenger.identificationType,
        id_number: passenger.id_number,
      })

      // postPassenger
      const passengerId = await postPassenger({
        personId: personId,
      })

      // postBookingPassenger
      await postBookingPassenger({
        booking: bookingId,
        passenger: passengerId,
      })
    })

    localStorage.removeItem("passengersToConfirm")

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
      <SectionTitle text="Confirmar Datos" id="confirm-title" />
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
        baseId="success-dialog"
      />
    </div>
  )
}

export default ConfirmationPage
