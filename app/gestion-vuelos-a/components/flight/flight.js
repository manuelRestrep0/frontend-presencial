"use client";
import { Button } from "@mui/material";
import styles from "./flight.css";
import SendIcon from "@mui/icons-material/Send";
import FlightForm from "./flightform";

function FlightRegister() {
  return (
    <div className="FlightInformation">
      <div className="FlightFormTitle">
        <h2>Ingresar informacion de vuelo</h2>
      </div>
      <div className="FlightFormSeparator"></div>
      <div className="FlightFormSelect">
        <FlightForm></FlightForm>
      </div>
      <div className="FlightSendInfo">
        <Button variant="contained" endIcon={<SendIcon />}>
          Registrar vuelo
        </Button>
      </div>
    </div>
  );
}
export default FlightRegister;
