"use client"

import { Box, Container, Grid, ImageList, ImageListItem, TextField, Typography } from "@mui/material"
import Image from "next/image"
import bancoBogota from "@/../public/cards/BancodeBogota.png"
import bancolombia from "@/../public/cards/Bancolombia.png"
import bbva from "@/../public/cards/BBVA.png"
import davivienda from "@/../public/cards/Davivienda.png"
import itau from "@/../public/cards/Itau.png"
import masterCard from "@/../public/cards/MaterCard.png"
import visa from "@/../public/cards/Visa.png"
import { useRouter } from "next/navigation"

export default function MethodInfo({params}:{params:{processID:string}}) {

  const router= useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      name: data.get("name"),
      cardNumber: data.get("cardNumber"),
      expirationMonth: data.get("expirationMonth"),
      expirationYear: data.get("expirationYear"),
      securityCode: data.get("securityCode"),
    })
  }
  return (
    <Container
      component={"main"}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div className="flex h-[70px] w-full items-end bg-[#496073]">
        <Typography
          component="h1"
          variant="h2"
          fontWeight={"300"}
          color={"white"}
          fontSize={25}
          align="left"
          sx={{ marginLeft: "15px" }}
        >
          Tarjeta de crédito o débito
        </Typography>
      </div>
      <Grid container sx={{ width: "100%", height: "30%", alignItems: "center", marginTop: "20px" }}>
        <Grid item xs={4} sx={{ marginLeft: "15px" }}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h2" fontWeight={"100"} color={"gray"} fontSize={20} align="left">
              Tarjeta de crédito
            </Typography>
            <div className="flex w-3/6 items-center justify-center">
              <ImageList cols={2} rowHeight={80} gap={10}>
                <ImageListItem>
                  <Image src={visa} alt="Imagen Visa" />
                </ImageListItem>
                <ImageListItem>
                  <Image src={masterCard} alt="Imagen MasterCard" />
                </ImageListItem>
              </ImageList>
            </div>
          </Grid>
        </Grid>

        <div className="border-[gray]; h-[90%] w-px border border-solid"></div>

        <Grid item xs={7} sx={{ marginLeft: "15px" }}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h2"
              fontWeight={"100"}
              color={"gray"}
              fontSize={20}
              align="left"
              sx={{ marginLeft: "15px" }}
            >
              Tarjeta de débito
            </Typography>
            <div className="flex w-3/6 items-center justify-center">
              <ImageList cols={3} rowHeight={58} gap={10}>
                <ImageListItem>
                  <Image src={bancoBogota} alt="Imagen Banco de bogota" />
                </ImageListItem>
                <ImageListItem>
                  <Image src={bancolombia} alt="Imagen Bancolombia" />
                </ImageListItem>
                <ImageListItem>
                  <Image src={davivienda} alt="Imagen Davivienda" />
                </ImageListItem>
                <ImageListItem>
                  <Image src={bbva} alt="Imagen BBVA" />
                </ImageListItem>
                <ImageListItem>
                  <Image src={itau} alt="Imagen Itaú" />
                </ImageListItem>
              </ImageList>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ marginTop: "15px" }}>
            <TextField
              margin="normal"
              required
              id="name"
              label="Nombre del Titular"
              name="name"
              placeholder="Como aparece en la tarjeta"
              sx={{ width: "45%", backgroundColor: "#D9D9D9" }}
            />
            <TextField
              margin="normal"
              required
              id="cardNumber"
              label="Número de la tarjeta"
              name="cardNumber"
              sx={{ width: "45%", backgroundColor: "#D9D9D9", marginLeft: "50px" }}
            />
            <TextField
              margin="normal"
              required
              id="expirationMonth"
              label="Mes"
              placeholder="Indiquelo en número"
              name="expirationMonth"
              sx={{ width: "20%", backgroundColor: "#D9D9D9" }}
            />
            <TextField
              margin="normal"
              required
              id="expirationYear"
              label="Año"
              placeholder="Indiquelo en número"
              name="expirationYear"
              sx={{ width: "20%", backgroundColor: "#D9D9D9", marginLeft: "38px" }}
            />
            <TextField
              margin="normal"
              required
              id="securityCode"
              label="Código de seguridad"
              placeholder="3 dígitos"
              name="securityCode"
              sx={{ width: "20%", backgroundColor: "#D9D9D9", marginLeft: "50px" }}
            />
            <div className="mt-2.5 flex items-center justify-center">
              <button
                className="relative m-0 box-border w-2/5 min-w-[64px] cursor-pointer items-center justify-center rounded border-0 bg-[#208EE6] px-4 py-1.5 align-middle font-medium text-[white] no-underline hover:bg-[#0e6ecd]"
                type="submit" onClick={() => {router.push(`/payments-b/process/${params.processID}/notification`)}}
              >
            
                PAGAR
              </button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
