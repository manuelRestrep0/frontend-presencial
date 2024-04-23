import React from "react"
import {BaggageCard} from "components/molecules/gestion-equipaje/card"

const BaggageTable = () => {
  return (
    <div className="mb-10 mt-10 flex justify-center space-x-10">
      <BaggageCard
        title="Equipaje personal"
        information="Pieza adicional"
        description="Medidas máximo: 45 cm  x 35 cm  x 25 cm (alto, largo y ancho). Peso máximo 5kg por pasajero. *Máximo 1 pieza por pasajeros."
      />
      <BaggageCard
        title="Equipaje de Mano"
        information="Pieza adicional"
        description="Medidas máximas: 55 x 35 x 25cm (alto, largo y ancho), incluyendo ruedas y manijas. Peso máximo: 10kg. *Máximo 1 pieza por pasajeros."
      />
      <BaggageCard
        title="Equipaje de Bodega"
        information="Pieza adicional"
        description="Medidas máximas: no debe exceder los 158cm de dimensión total (largo + ancho + alto). Peso máximo : 23kg y 32kg dependiendo de la tarifa.  *Máximo 3 piezas por pasajeros."
      />
    </div>
  )
}

export default BaggageTable
