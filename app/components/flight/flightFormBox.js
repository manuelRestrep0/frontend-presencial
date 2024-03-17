"use client";
import {
  FormControl,
  Select,
  TextField,
  InputAdornment,
  MenuItem,
  IconButton,
} from "@mui/material";
import data from "../data/data.json";
import styles from "./flight.css";

/**
 * Función para renderizar un componente de selección con opciones.
 *
 * @param {string} placeholder El texto que se mostrará como placeholder en el componente de selección.
 * @param {Array<string>} optionData Los datos de las opciones que se mostrarán en el componente de selección.
 * @returns {JSX.Element} El componente de selección renderizado.
 */
function FlightFormSelect(props) {
  console.log(props.data);
  return (
    <div className="row-form">
      <FormControl variant="filled" sx={{ m: 1, width: 200, color: "#ffebee" }}>
        <Select defaultValue={""}>
          {props?.data?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function FlightFormInput(props) {
  return (
    <TextField
      label={props.label}
      id="outlined-start-adornment"
      sx={{ m: 1, width: "100%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{<props.icon></props.icon>}</InputAdornment>
        ),
      }}
    />
  );
}
export { FlightFormInput, FlightFormSelect };
