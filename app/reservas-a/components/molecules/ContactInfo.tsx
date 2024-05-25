import Stack from "@mui/material/Stack"
import React from "react"
import { Person } from "app/reservas-a/api/person/interface/person"
import Cajoncito from "../atoms/inputs/Cajoncito"
import BodyText from "../atoms/texts/BodyText"

interface ContactInfoProps {
  data: Person
  disabled: boolean
  required: boolean
  onDataChange: (e: React.ChangeEvent<HTMLInputElement>, field: keyof Person) => void
}

const ContactInfo: React.FC<ContactInfoProps> = ({ data, onDataChange, disabled, required }) => {
  return (
    <Stack spacing={1} direction="column" alignItems="center">
      <BodyText text="Contacto de emergencia:" sx={{ fontWeight: "bold" }} />
      <BodyText text="Es necesario un contacto de emergencia" />
      <Cajoncito
        title={"Nombre"}
        value={data.contactName}
        onChange={(e) => {
          onDataChange(e, "contactName")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Apellidos"}
        value={data.contactLastname}
        onChange={(e) => {
          onDataChange(e, "contactLastname")
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Teléfono"}
        value={data.contactPhone}
        onChange={(e) => {
          onDataChange(e, "contactPhone")
        }}
        disabled={disabled}
        required={required}
      />
    </Stack>
  )
}

export default ContactInfo
