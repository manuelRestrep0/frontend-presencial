"use client"

import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import checked from "@/../public/checked.png"
import remove from "@/../public/remove.png"

export default function Notification() {
  //Respuesta asociada al estado de la transacción: true -> aceptada, false -> rechazada
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
                16/03/2024 11:34 AM
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} fontWeight={"bold"}>
                Valor pagado:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5" color={"black"} fontSize={15} align="right">
                650 $
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
                  400.00$
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14} fontWeight={"bold"}>
                  Valor de los equipajes:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography component="h5" color={"black"} fontSize={14}>
                  200.00$
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
                16/03/2024 11:34 AM
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
