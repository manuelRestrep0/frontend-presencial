"use client"
import React, { useEffect, useState } from "react"

interface AirplaneModel {
  id: string
  family: string
  capacity: number
  cargoCapacity: number
}

interface Airport {
  id: string
  name: string
  type: string
  city: string
  country: string
  runways: number
}

interface Scale {
  scaleId: number
  airplaneModel: AirplaneModel
  originAirport: Airport
  destinationAirport: Airport
  departureDate: string
  arrivalDate: string
}

interface Flight {
  id: number
  flightNumber: string
  basePrice: number
  taxPercentage: number
  surcharge: number
  scales: Scale[]
  flightType: string | null
}

function FlightList() {
  const [flights, setFlights] = useState<Flight[]>([])
  const [error, setError] = useState<string | null>(null)
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("https://codefact.udea.edu.co/modulo-19/v1/flights/searchFlights")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = (await response.json()) as Flight[]
        setFlights(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(`Error fetching flights: ${error.message}`)
          console.error("Error fetching flights:", error.message, error.stack)
        } else {
          setError("An unknown error occurred")
          console.error("An unknown error occurred:", error)
        }
      }
    }

    fetchFlights()
  }, [])

  const openModal = (flight: Flight) => {
    setSelectedFlight(flight)
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelectedFlight(null)
    setModalOpen(false)
  }

  const deleteFlight = async (id: number) => {
    try {
      const response = await fetch(`https://codefact.udea.edu.co/modulo-19/v1/flights/delete/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      // Remove the deleted flight from the state
      setFlights(flights.filter((flight) => flight.id !== id))
      closeModal() // Close modal after successful deletion
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(`Error deleting flight: ${error.message}`)
        console.error("Error deleting flight:", error.message, error.stack)
      } else {
        setError("An unknown error occurred")
        console.error("An unknown error occurred:", error)
      }
    }
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <table className="ml-10">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-4 pr-6 text-lg font-semibold">No. Vuelo</th>
            <th className="py-4 pr-6 text-lg font-semibold">Tipo de vuelo</th>
            <th className="py-4 pr-6 text-lg font-semibold">Origen</th>
            <th className="py-4 pr-6 text-lg font-semibold">Destino</th>
            <th className="py-4 pr-6 text-lg font-semibold">Fecha de salida</th>
            <th className="py-4 pr-6 text-lg font-semibold">Hora de salida</th>
            <th className="py-4 pr-6 text-lg font-semibold">Fecha de llegada</th>
            <th className="py-4 pr-6 text-lg font-semibold">Hora de llegada</th>
            <th className="py-4 pr-6 text-lg font-semibold">Ver más</th>
            <th className="py-4 pr-6 text-lg font-semibold">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) =>
            flight.scales.length > 0 ? (
              flight.scales.map((scale) => (
                <tr key={`${flight.id}-${scale.scaleId}`} className="border-b border-gray-300">
                  <td className="py-4 pr-10">{flight.flightNumber}</td>
                  <td className="py-4 pr-10">{flight.flightType}</td>
                  <td className="py-4 pr-10">{scale.originAirport.name}</td>
                  <td className="py-4 pr-10">{scale.destinationAirport.name}</td>
                  <td className="py-4 pr-10">{new Date(scale.departureDate).toLocaleDateString()}</td>
                  <td className="py-4 pr-10">{new Date(scale.departureDate).toLocaleTimeString()}</td>
                  <td className="py-4 pr-10">{new Date(scale.arrivalDate).toLocaleDateString()}</td>
                  <td className="py-4 pr-10">{new Date(scale.arrivalDate).toLocaleTimeString()}</td>
                  <td className="py-4 pr-6">
                    <button onClick={() => openModal(flight)}>Ver más</button>
                  </td>
                  <td className="py-4 pr-6">
                    <button onClick={() => deleteFlight(flight.id)} className="text-red-500">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr key={flight.id} className="border-b border-gray-300">
                <td className="py-4 pr-10">{flight.flightNumber}</td>
                <td className="py-4 pr-10">{flight.flightType}</td>
                <td colSpan={8} className="py-4 text-center">
                  Sin escalas
                </td>
                <td className="py-4 pr-6">
                  <button onClick={() => deleteFlight(flight.id)} className="text-red-500">
                    Eliminar
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {modalOpen && selectedFlight && (
        <div className="modal fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
          <div className="modal-content relative rounded-lg bg-white p-8">
            <span
              className="close absolute right-8 top-5 -mr-4 -mt-4 cursor-pointer text-3xl text-gray-600"
              onClick={closeModal}
            >
              &times;
            </span>
            <div className="flight-details">
              <h2 className="mb-4 text-2xl font-bold">{selectedFlight.flightNumber}</h2>
              <p>
                <span className="font-semibold">Tipo de vuelo:</span> {selectedFlight.flightType}
              </p>
              <p>
                <span className="font-semibold">Precio base:</span> ${selectedFlight.basePrice}
              </p>
              <p>
                <span className="font-semibold">Sobretasa:</span> ${selectedFlight.surcharge}
              </p>
              <p>
                <span className="font-semibold">Impuestos:</span> {selectedFlight.taxPercentage}%
              </p>
              {selectedFlight.scales.map((scale, index) => (
                <div key={index} className="scale-details mt-4">
                  <h3 className="text-xl font-semibold">Escala {index + 1}</h3>
                  <p>
                    <span className="font-semibold">Origen:</span> {scale.originAirport.name} (
                    {scale.originAirport.city}, {scale.originAirport.country})
                  </p>
                  <p>
                    <span className="font-semibold">Destino:</span> {scale.destinationAirport.name} (
                    {scale.destinationAirport.city}, {scale.destinationAirport.country})
                  </p>
                  <p>
                    <span className="font-semibold">Fecha de salida:</span>{" "}
                    {new Date(scale.departureDate).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Hora de salida:</span>{" "}
                    {new Date(scale.departureDate).toLocaleTimeString()}
                  </p>
                  <p>
                    <span className="font-semibold">Fecha de llegada:</span>{" "}
                    {new Date(scale.arrivalDate).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Hora de llegada:</span>{" "}
                    {new Date(scale.arrivalDate).toLocaleTimeString()}
                  </p>
                  <p>
                    <span className="font-semibold">Modelo del avión:</span> {scale.airplaneModel.family}
                  </p>
                  <p>
                    <span className="font-semibold">Capacidad de pasajeros:</span> {scale.airplaneModel.capacity}
                  </p>
                  <p>
                    <span className="font-semibold">Capacidad de carga:</span> {scale.airplaneModel.cargoCapacity} kg
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FlightList
