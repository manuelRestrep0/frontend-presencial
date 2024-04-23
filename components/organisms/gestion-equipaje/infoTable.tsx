import React from 'react'
import { InfoCard } from 'components/molecules/gestion-equipaje/card'

const InfoTable = () => {
  return (
    <div>
      <div className="flex justify-center m-7">
                <InfoCard title="Sobre Nosotros"/>
                <InfoCard title="Informacion Legal"/>
                <InfoCard title="Portales Asociados"/>
            </div>
    </div>
  )
}

export default InfoTable
