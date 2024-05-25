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
        title={"Nombre"}
        value={data.name}
        onChange={(e) => {
          onDataChange(e, "name")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Apellidos"}
        value={data.lastname}
        onChange={(e) => {
          onDataChange(e, "lastname")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Correo"}
        value={data.email}
        onChange={(e) => {
          onDataChange(e, "email")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Teléfono"}
        value={data.phone}
        onChange={(e) => {
          onDataChange(e, "phone")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Dirección en caso de pérdida de equipaje"}
        value={data.address}
        onChange={(e) => {
          onDataChange(e, "address")
        }}
        disabled={disabled}
        required={required}
      />
    </Stack>
  )
}

export default PersonalInfo
