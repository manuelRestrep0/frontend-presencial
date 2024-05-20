import Stack from "@mui/material/Stack"
import React from "react"
import ContactInfo from "../molecules/ContactInfo"
import PersonalInfo from "../molecules/PersonalInfo"

interface PassengerInfoProps {
  readOnly: boolean
}

const PassengerInfo: React.FC<PassengerInfoProps> = ({ readOnly }) => {
  return (
    <Stack spacing={60} direction="row" justifyContent="center">
      <PersonalInfo disabled={readOnly} required={!readOnly} />
      <ContactInfo disabled={readOnly} required={!readOnly} />
    </Stack>
  )
}

export default PassengerInfo
