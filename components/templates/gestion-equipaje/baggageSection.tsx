import React from 'react'
import BaggageTable from 'components/organisms/gestion-equipaje/baggageTable'

const BaggageSection = () => {
  return (
    <div>
      <div className="flex justify-center mt-28">
            <div className="mx-auto max-w-screen-lg">
                <h1 className="text-3xl font-semibold text-cyan-500 mb-4">Reserva: ########</h1>
                <h2 className="text-2xl text-cyan-500 mb-4">Nombre de Pasajero</h2>
                <p className="text-gray-500 text-xl">
                    Ten en cuenta nuestras políticas para equipaje, peso, dimensiones, equipaje
                    especial, entre otros.
                </p>
                <BaggageTable/>
            </div>   
        </div>
    </div>
  )
}

export default BaggageSection
