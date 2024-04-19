"use client"

import React from "react";
import Header from "components/gestion_asientos/organism/header";
import { Reserva } from "components/gestion_asientos/atom/title";
import { Pasajero } from "components/gestion_asientos/organism/component";
import Button from "components/gestion_asientos/atom/button";
import ListHeader from "components/gestion_asientos/molecule/listHeader";
import PassengerSelectable from "components/gestion_asientos/molecule/passengerSelectable";

const reservaEjemplo: Reserva = {
  numeroReserva: 435723,
  numPasajerosReserva: 2 // Cantidad pasajeros reserva. Calculado por el back.
}

const totalAcumulado: number = 0; // Valor que suman las tarifas de asientos seleccionados. Calculado por el back.

// Datos quemados de pasajeros
const pasajerosEjemplo: Pasajero[] = [
  {
    nombre: "Juan Pérez",
    numeroPasajero: 1,
    especificaciones: "Sin especificaciones",
  },
  {
    nombre: "María González",
    numeroPasajero: 2,
    especificaciones: "Sin especificaciones",
  },
]

export default function GestionAsientos() {
  return (
    <>
      <div>
        <Header reserva={reservaEjemplo} total={totalAcumulado} />
      </div>

      <div className="items-center justify-center">
        <ListHeader reserva={reservaEjemplo} />
      </div>

      {pasajerosEjemplo.map((pasajero, index) => (
        <div key={index}>
          <PassengerSelectable pasajero={pasajero} reserva={reservaEjemplo} />
        </div>
      ))}
      
      <div className="flex justify-center mt-8">
        <Button text="Volver" width="w-48" pd="p-3"/>
      </div>
    </>
  )
}
