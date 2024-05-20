import TextField from "@mui/material/TextField"
import React from "react"

interface CajoncitoProps {
  title: string
  required?: boolean
  disabled?: boolean
}

const Cajoncito: React.FC<CajoncitoProps> = ({ title, required = true, disabled = false }) => {
  return <TextField required={required} disabled={disabled} label={title} style={{ width: "150%", margin: "5%" }} />
}

export default Cajoncito
