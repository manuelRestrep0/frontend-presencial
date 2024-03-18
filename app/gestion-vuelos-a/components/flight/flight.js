"use client";
import React from "react"; // Importar React si estás usando JSX
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FlightForm from "./flightform"; // Importar FlightForm desde la ruta correcta
import "./flight.css"; // Importar estilos directamente

function FlightRegister() {
  return (
    <div className="FlightInformation">
      <div className="FlightFormTitle">
        <h2>Ingresar información de vuelo</h2> {/* Corregir la ortografía */}
      </div>
      <div className="FlightFormSeparator"></div>
      <div className="FlightFormSelect">
        <FlightForm />
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

