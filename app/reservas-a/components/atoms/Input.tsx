import React from 'react'
import TextField from '@mui/material/TextField'

interface Props {
  title: string,
}

function Input({ title }: Props) {
  return (
    <TextField
      id="outlined-input"
      label={title}
      style={{ width: '150%', margin: '5%' }}
    />
  )
}

export default Input