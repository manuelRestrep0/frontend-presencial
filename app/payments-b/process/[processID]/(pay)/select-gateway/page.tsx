'use client'
import { Typography } from "@mui/material"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"

import { useEffect, useState } from "react"
import PayGwButton from "./components/button/payGwButton"

export default function SelectGateway({ params }: { params: { processID: string}}) {

  const [loading, setLoading] = useState<boolean>(true)

  const [gateways, setGateways] = useState<string[]>([])
  useEffect(() => {
    const getGateways = async () => {
      const res = await fetch('https://backendoficial-presencial-pagosb.onrender.com/flights/paymentgateways')
      const data = await res.json()
      setGateways(data as string[])
      setLoading(false)
    }
    getGateways()
  }, [])

  
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        height: "95%",
      }}
    >
      <CssBaseline />
      <div className="flex items-center justify-center">
        <Typography component={"h1"} color={"black"} fontSize={38}>
          Pasarela de pago
        </Typography>
      </div>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {
          loading ? <p>No hay pasarelas disponibles</p> :

         ( gateways.map( (gateway, index) => (
            <PayGwButton key={index} gatewayName={gateway} processID={params.processID}/>
          )))
        }
      </Container>
    </Container>
  )
}
