"use client"

import React, { useState } from "react"
// import "./seleccionar_asiento.css"

/*
nombre: types-gestion-asientos.ts
export interface Asiento {
  silla: string
  clase: string
  ubicacion: string
}

import { Asiento } from "./types-gestion-asientos"
*/

interface Asiento {
  silla: string
  clase: string
  ubicacion: string
}

export interface Pasajero {
  nombre: string
  numeroPasajero: number
  asiento: Asiento
  especificaciones: string
}

interface SeleccionarAsientoProps {
  onClose: (asientoSeleccionado: string) => void
  pasajero: Pasajero
}

interface HandleAsiento {
  silla: string
  clase: string
}

const SeleccionarAsiento = ({ onClose, pasajero }: SeleccionarAsientoProps) => {
  const [asientoSeleccionado, setAsientoSeleccionado] = useState<string>("")

  const handleAsientoSeleccionado = ({ silla, clase }: HandleAsiento) => {
    // Concatena el asiento y la clase en un formato deseado
    const asientoClase = `${silla}-${clase}`

    // Si el mismo asiento ya está seleccionado, deselecciónalo
    if (asientoSeleccionado === asientoClase) {
      setAsientoSeleccionado("")
    } else {
      // Si otro asiento está seleccionado, reemplázalo
      setAsientoSeleccionado(asientoClase)
    }
  }

  // Datos quemados para la tabla
  const datosAsientos = [
    { silla: "A-1", clase: "Primera Clase", ubicacion: "Ventana" },
    { silla: "B-1", clase: "Económica", ubicacion: "Pasillo" },
    { silla: "C-1", clase: "Business", ubicacion: "Ventana" },
    { silla: "A-2", clase: "Primera Clase", ubicacion: "Ventana" },
    { silla: "B-2", clase: "Económica", ubicacion: "Pasillo" },
    { silla: "C-2", clase: "Business", ubicacion: "Ventana" },
    { silla: "A-3", clase: "Primera Clase", ubicacion: "Ventana" },
    { silla: "B-3", clase: "Económica", ubicacion: "Pasillo" },
    { silla: "C-3", clase: "Business", ubicacion: "Ventana" },
  ]

  return (
    <div className="seleccionar_asiento-overlay">
      <div className="seleccionar_asiento-content">
        <div className="cabeza">
          <h6>Pasajero: {pasajero.numeroPasajero}</h6>
          <h6>{pasajero.numeroPasajero} reserva</h6>
        </div>
        <h3>{pasajero.nombre}</h3>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Silla</th>
              <th>Clase</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>
                <hr style={{ width: "98%" }} />
              </td>
            </tr>
            {datosAsientos.map((asiento, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="radio"
                    name="asiento"
                    checked={asientoSeleccionado === `${asiento.silla}-${asiento.clase}`}
                    onChange={() => handleAsientoSeleccionado(asiento)}
                  />
                </td>
                <td
                  style={{ color: asientoSeleccionado === `${asiento.silla}-${asiento.clase}` ? "#3498db" : "inherit" }}
                >
                  {asiento.silla}
                </td>
                <td
                  style={{ color: asientoSeleccionado === `${asiento.silla}-${asiento.clase}` ? "#3498db" : "inherit" }}
                >
                  {asiento.clase}
                </td>
                <td
                  style={{ color: asientoSeleccionado === `${asiento.silla}-${asiento.clase}` ? "#3498db" : "inherit" }}
                >
                  {asiento.ubicacion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-2 border border-red-600">
          <button
            className="flex w-1/2 justify-center rounded-full bg-blue-500 p-2 text-white"
            onClick={() => onClose(asientoSeleccionado)}
          >
            Cancelar
          </button>
          <button
            className="flex w-1/2 justify-center rounded-full bg-blue-500 p-2 text-white"
            onClick={() => onClose(asientoSeleccionado)}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default SeleccionarAsiento
