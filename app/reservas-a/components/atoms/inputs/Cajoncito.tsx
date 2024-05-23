import TextField from "@mui/material/TextField"
import React from "react"

interface CajoncitoProps {
  title: string
  required?: boolean
  disabled?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Cajoncito: React.FC<CajoncitoProps> = ({ title, required = true, disabled = false, value, onChange }) => {
  return (
    <TextField
      required={required}
      disabled={disabled}
      label={title}
      value={value}
      onChange={onChange}
      style={{ width: "150%", margin: "5%" }}
    />
  )
}

export default Cajoncito
