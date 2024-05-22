'use client'

import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import wompi from "@/../public/WompiLogoPrincipal.png"
import { payMethods } from "enum/paymentMethods"
import PayMethodButton from "./components/PayMethodButton"


import { useEffect, useState } from "react"



interface CostsData {
  seatCost: number
  flightCost: number
  baggageCost: number
  otherCosts: number
  totalCost: number
}



export default function SelectMethod({params}:{params:{processID:string}}) {

   
  const defaultCostsData: CostsData = {
    seatCost: 0,
    flightCost: 0,
    baggageCost: 0,
    otherCosts: 0,
    totalCost: 0,
  }


  const [costInfo, setCostInfo] = useState<CostsData>(defaultCostsData)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://backendoficial-presencial-pagosb.onrender.com/flights/pricebyid?id=${params?.processID}`
      )
      const data = await res.json()
      setCostInfo(data as CostsData)
      setIsLoading(false)
    }
    fetchData()
  }, [])



  return (
    <Container
      component={"main"}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
    >
      <Grid
        spacing={1}
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90%",
          width: "50%",
        }}
      >
        <Grid item xs={12}>
          <Typography component="h1" variant="h2" fontWeight={"300"} color={"black"} fontSize={25} align="left">
            Escoge el método de pago
          </Typography>
          <Typography component="h5" fontWeight={"300"} color={"gray"} fontSize={15} align="left" className="mt-2.5">
            PAGO B
          </Typography>
          <Typography component="h5" fontWeight={"300"} color={"black"} fontSize={15} align="left">
            Singapur Airlines
          </Typography>
          {isLoading ? (<Typography component="h1" fontWeight={"bold"} color={"black"} fontSize={25} align="right">
            Cargando...
          </Typography>): (<Typography component="h1" fontWeight={"bold"} color={"black"} fontSize={25} align="right">
          {costInfo.totalCost} $
          </Typography>)}
          
          <PayMethodButton method={payMethods.CARDS} text={"Usa tus tarjetas"} processID={params.processID} />
          <PayMethodButton method={payMethods.TRANSFER} text={"Transferencia de Bancolombia"} processID={""} />
          <PayMethodButton method={payMethods.NEQUI} text={"Usa tu cuenta Nequi"} processID={""} />
          <PayMethodButton method={payMethods.PSE} text={"Cuenta de ahorros o corriente"} processID={""} />
        </Grid>
      </Grid>

      <div className="border-[gray]; h-[80%] w-px border border-solid"></div>

      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50%", width: "50%" }}
      >
        <Grid item xs={12}>
          <Typography component="h2" fontWeight={"300"} color={"gray"} fontSize={25} align="center">
            Transacción realizada vía:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* La imagen corresponderá a la de la pasarela seleccionada*/}
          <Image
            src={wompi}
            alt={"Logo de la pasarela de pago escogída"}
            className="block h-auto w-4/5 object-cover transition-[filter] duration-[0.3s] ease-[ease]"
          />
        </Grid>
      </Grid>
    </Container>
  )
}
