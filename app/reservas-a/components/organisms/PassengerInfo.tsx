import Stack from "@mui/material/Stack"
import React from "react"
import ContactInfo from "../molecules/ContactInfo"
import PersonalInfo from "../molecules/PersonalInfo"
import { Person } from "app/reservas-a/api/person/interface/person"

interface PassengerInfoProps {
  data: Person
  readOnly: boolean
  onDataChange: (e: React.ChangeEvent<HTMLInputElement>, field: keyof Person) => void
}

const PassengerInfo: React.FC<PassengerInfoProps> = ({ data, onDataChange, readOnly }) => {
  return (
    <Stack spacing={60} direction="row" justifyContent="center">
      <PersonalInfo disabled={readOnly} required={!readOnly} data={data} onDataChange={onDataChange} />
      <ContactInfo disabled={readOnly} required={!readOnly} data={data} onDataChange={onDataChange} />
    </Stack>
  )
}

export default PassengerInfo
