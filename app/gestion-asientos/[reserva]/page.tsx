"use client"

import GestionAsientosPage from "components/gestion_asientos/pages"
import { useParams } from "next/navigation"

export default function GestionAsientosByReserva() {
  const { reserva } = useParams()

  if (reserva) {
    return <GestionAsientosPage reserva={reserva as string} />
  }

  return (
    <main className="grid min-h-screen place-items-center text-4xl font-bold text-red-600">
      <h1>Error al obtener el id de reserva</h1>
    </main>
  )
}
