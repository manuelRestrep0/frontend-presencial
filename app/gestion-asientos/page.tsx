"use client"

import SeleccionarAsiento, { Pasajero } from "components/gestion_asientos/organism/component"

const pasajero: Pasajero = {
  nombre: "Juan Pérez",
  numeroPasajero: 1,
  asiento: {
    silla: "A-1",
    clase: "Primera Clase",
    ubicacion: "Ventana",
  },
  especificaciones: "Sin especificaciones",
}

export default function GestionAsientos() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">Módulo Gestión de Asientos</h1>
      <SeleccionarAsiento pasajero={pasajero} onClose={() => {}} />
    </main>
  )
}
