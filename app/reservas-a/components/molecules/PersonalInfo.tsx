import Stack from "@mui/material/Stack"
import React from "react"
import { Person } from "app/reservas-a/api/person/interface/person"
import Cajoncito from "../atoms/inputs/Cajoncito"

interface PersonalInfoProps {
  data: Person
  disabled: boolean
  required: boolean
  onDataChange: (e: React.ChangeEvent<HTMLInputElement>, field: keyof Person) => void
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, onDataChange, disabled, required }) => {
  return (
    <Stack spacing={1} direction="column">
      <Cajoncito
        title={"Tipo de documento"}
        value={data.identificationType}
        onChange={(e) => {
          onDataChange(e, "identificationType")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Número de documento"}
        value={data.id_number}
        onChange={(e) => {
          onDataChange(e, "id_number")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Nombre"}
        value={data.firstName}
        onChange={(e) => {
          onDataChange(e, "firstName")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Apellidos"}
        value={data.lastName}
        onChange={(e) => {
          onDataChange(e, "lastName")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Correo"}
        value={data.mail}
        onChange={(e) => {
          onDataChange(e, "mail")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Teléfono"}
        value={data.phoneNumber}
        onChange={(e) => {
          onDataChange(e, "phoneNumber")
        }}
        disabled={disabled}
        required={required}
      />
    </Stack>
  )
}

export default PersonalInfo
