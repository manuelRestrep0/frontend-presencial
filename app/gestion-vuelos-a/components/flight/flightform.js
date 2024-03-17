import data from "../data/data.json"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { FlightFormInput, FlightFormSelect } from "./flightFormBox"
import GroupIcon from "@mui/icons-material/Group"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import PercentIcon from "@mui/icons-material/Percent"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker"

function FlightFormColComponent(props) {
  return (
    <div className="FlightFormCol">
      <div className="FlightFormCol-title">
        <h3>{props.title}</h3>
      </div>
      <div className="FlightFormCol-form">{props.children}</div>
    </div>
  )
}

function FlightFormComponent(props) {
  console.log(props.data)
  return (
    <div className="FlightFormCol">
      <div className="FlightFormCol-title">
        <h3>{props.title}</h3>
      </div>
      <div className="FlightFormCol-form">
        {props.isArray ? (
          props.data.map((component, index) => {
            return <FlightFormSelect key={index} data={component}></FlightFormSelect>
          })
        ) : (
          <FlightFormSelect data={[...new Set(data.flights.map((flight) => flight.type))]}></FlightFormSelect>
        )}
      </div>
    </div>
  )
}

export default function FlightForm() {
  return (
    <>
      <div className="FlightFormRow">
        <FlightFormComponent title="Tipo de vuelo" data={""}></FlightFormComponent>
        <FlightFormComponent
          title="Tipo de aeronave"
          data={[
            [...new Set(data.flights.map((flight) => flight.airplane.family))],
            [...new Set(data.flights.map((flight) => flight.airplane.type))],
          ]}
          isArray={true}
        ></FlightFormComponent>
        <FlightFormColComponent title="Numero de pasajeros">
          <FlightFormInput icon={GroupIcon}></FlightFormInput>
        </FlightFormColComponent>
      </div>
      <div className="FlightFormRow">
        <FlightFormColComponent title="Precio">
          <FlightFormInput icon={AttachMoneyIcon}></FlightFormInput>
        </FlightFormColComponent>
        <FlightFormColComponent title="% Impuestos">
          <FlightFormInput icon={PercentIcon}></FlightFormInput>
        </FlightFormColComponent>
        <FlightFormColComponent title="% Sobretasa">
          <FlightFormInput icon={PercentIcon}></FlightFormInput>
        </FlightFormColComponent>
      </div>
      <div className="FlightFormRow">
        <FlightFormColComponent title="Origen">
          <FlightFormSelect data={data.airports}></FlightFormSelect>
        </FlightFormColComponent>
        <FlightFormColComponent title="Fecha de Salida">
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DatePicker
              label="Basic date picker"
              slotProps={{
                textField: {
                  helperText: "DD/MM/YYYY",
                },
              }}
              format="DD-MM-YYYY"
            />
          </LocalizationProvider>
        </FlightFormColComponent>
        <FlightFormColComponent title="Hora de Salida">
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <MobileTimePicker label={"Selecciona la hora"} openTo="hours" />
          </LocalizationProvider>
        </FlightFormColComponent>
      </div>
      <div className="FlightFormRow">
        <FlightFormColComponent title="Destino">
          <FlightFormSelect data={data.airports}></FlightFormSelect>
        </FlightFormColComponent>
        <FlightFormColComponent title="Fecha de Llegada">
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DatePicker
              label="Selecciona la fecha"
              slotProps={{
                textField: {
                  helperText: "DD/MM/YYYY",
                },
              }}
              format="DD-MM-YYYY"
            />
          </LocalizationProvider>
        </FlightFormColComponent>
        <FlightFormColComponent title="Hora de Llegada">
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <MobileTimePicker label={"Selecciona la hora"} openTo="hours" />
          </LocalizationProvider>
        </FlightFormColComponent>
      </div>
    </>
  )
}
