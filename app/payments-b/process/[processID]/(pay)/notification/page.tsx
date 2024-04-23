"use client"

import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import checked from "@/../public/checked.png"
import remove from "@/../public/remove.png"
import { useEffect, useState } from "react"

interface CostsData {
  seatCost: number;
  flightCost: number;
  baggageCost: number;
  otherCosts: number;
  totalCost: number;
}

export default function Notification({params}: {params: {processID: string}}) {
  //Respuesta asociada al estado de la transacción: true -> aceptada, false -> rechazada
  const getCurrentDate = () => {
    // Obtiene la fecha y hora actual
    const fechaHoraActual = new Date();
    
    // Obtiene los componentes de la fecha y hora actual
    const dia = String(fechaHoraActual.getDate()).padStart(2, '0');
    const mes = String(fechaHoraActual.getMonth() + 1).padStart(2, '0'); // El mes es devuelto indexado desde 0
    const año = fechaHoraActual.getFullYear();
    let horas = fechaHoraActual.getHours();
    const minutos = String(fechaHoraActual.getMinutes()).padStart(2, '0');
    
    // Formatea las horas al formato de 12 horas y determina si es AM o PM
    const am_pm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12 || 12; // Si son las 0:00, cambia a 12:00 AM
    
    // Retorna la fecha y hora formateada
    return `${dia}/${mes}/${año} ${horas}:${minutos} ${am_pm}`;
  }

  const defaultCostsData: CostsData = {
    seatCost: 0,
    flightCost: 0,
    baggageCost: 0,
    otherCosts: 0,
    totalCost: 0
  }
  const [costInfo, setCostInfo] =  useState<CostsData>(defaultCostsData)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://backendoficial-presencial-pagosb.onrender.com/flights/pricebyid?id=${params?.processID}`)
      const data= await res.json()
      setCostInfo(data as CostsData)
    }
    fetchData()
  }, [])

  console.log(costInfo)
  
  let responseStatus = true
  return (
    <>
      {responseStatus ? (
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            height: "95%",
          }}
        >
          <Image src={checked} alt="Checked" width={50} height={50} />
          <Typography component="h1" variant="h5" color={"black"} fontSize={30} sx={{ marginBottom: "30px" }}>
            Transacción aprobada
          </Typography>

          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
            }}
            spacing={3}
          >
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} fontWeight={"bold"}>
                Comprobante N°:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} align="right">
                48546952
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} fontWeight={"bold"}>
                Fecha:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} align="right">
                {getCurrentDate()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} fontWeight={"bold"}>
                Valor pagado:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} align="right">
                {costInfo.totalCost}$
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} fontWeight={"bold"}>
                Descripción:
              </Typography>
            </Grid>

            <Grid container spacing={1} sx={{ width: "90%", marginTop: "15px" }}>
              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14} fontWeight={"bold"}>
                  Valor de los asientos:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14}>
                  {costInfo.seatCost}$
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14} fontWeight={"bold"}>
                  Valor de los equipajes:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14}>
                 {costInfo.baggageCost}$
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14} fontWeight={"bold"}>
                  Impuestos adicionales:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14}>
                  50.00$
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <button
                className="relative m-0 my-4 box-border inline-flex w-full min-w-[64px] cursor-pointer items-center justify-center rounded border-0 bg-[#2196F3] px-4 py-1.5 align-middle font-medium text-[15] text-[white] no-underline hover:bg-[#0e6ecd]"
                onClick={() => {}}
              >
                ENVIAR COMPROBANTE
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                className="relative m-0 my-4 box-border inline-flex w-full min-w-[64px] cursor-pointer items-center justify-center rounded border-0 bg-[#2196F3] px-4 py-1.5 align-middle font-medium text-[15] text-[white] no-underline hover:bg-[#0e6ecd]"
                onClick={() => {}}
              >
                FINALIZAR
              </button>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            height: "95%",
          }}
        >
          <Image src={remove} alt="Canceled" width={50} height={50} />
          <Typography component="h1" variant="h5" color={"black"} fontSize={30} sx={{ marginBottom: "30px" }}>
            Transacción rechazada
          </Typography>

          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
            }}
            spacing={3}
          >
            <Grid item xs={12} sx={{ marginBottom: "20px" }}>
              <Typography component={"p"} color={"black"} fontSize={25} fontWeight={"normal"} textAlign={"center"}>
                Lo sentimos, no fue posible completar la transacción solicitada.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} fontWeight={"bold"}>
                Comprobante N°:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} align="right">
                48546952
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} fontWeight={"bold"}>
                Fecha:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} align="right">
                {getCurrentDate()}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <button
                className="relative m-0 box-border inline-flex w-full min-w-[64px] cursor-pointer items-center justify-center rounded border-0 bg-[#C62828] px-4 py-1.5 align-middle font-medium text-[15] text-[white] no-underline hover:bg-[#0e6ecd]"
                onClick={() => {}}
              >
                REINTENTAR
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                className="relative m-0  box-border inline-flex w-full min-w-[64px] cursor-pointer items-center justify-center rounded border-0 bg-[#C62828] px-4 py-1.5 align-middle font-medium text-[15] text-[white] no-underline hover:bg-[#0e6ecd]"
                onClick={() => {}}
              >
                CANCELAR
              </button>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}
