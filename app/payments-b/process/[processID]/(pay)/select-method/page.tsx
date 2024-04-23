import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import wompi from "@/../public/WompiLogoPrincipal.png"
import { payMethods } from "enum/paymentMethods"
import PayMethodButton from "./components/PayMethodButton"

export default function SelectMethod() {
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
            PAGO A
          </Typography>
          <Typography component="h5" fontWeight={"300"} color={"black"} fontSize={15} align="left">
            Singapur Airlines
          </Typography>
          {/*El valor del vuelo debe llegar desde backend*/}
          <Typography component="h1" fontWeight={"bold"} color={"black"} fontSize={25} align="right">
            $ 600 USD
          </Typography>
          <PayMethodButton method={payMethods.CARDS} text={"Usa tus tarjetas"} />
          <PayMethodButton method={payMethods.TRANSFER} text={"Transferencia de Bancolombia"} />
          <PayMethodButton method={payMethods.NEQUI} text={"Usa tu cuenta Nequi"} />
          <PayMethodButton method={payMethods.PSE} text={"Cuenta de ahorros o corriente"} />
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
