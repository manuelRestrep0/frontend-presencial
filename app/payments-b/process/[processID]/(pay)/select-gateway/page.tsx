import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";

import { payGateways } from "@/../enum/paymentsGateways";
import PayGwButton from "./components/button/payGwButton";


export default function SelectGateway() {
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
      <div className="flex justify-center items-center">
        <Typography
          component={"h1"}
          color={"black"}
          fontSize={38}
        >
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
        <PayGwButton gateWay={payGateways.WOMPI} />
        <PayGwButton gateWay={payGateways.WOMPI} />
        <PayGwButton gateWay={payGateways.WOMPI} />
        <PayGwButton gateWay={payGateways.WOMPI} />
        <PayGwButton gateWay={payGateways.WOMPI} />
        <PayGwButton gateWay={payGateways.WOMPI} />
      </Container>
    </Container>
  );
}