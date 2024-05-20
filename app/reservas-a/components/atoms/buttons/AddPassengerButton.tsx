import AddIcon from "@mui/icons-material/Add"
import Button from "@mui/material/Button"
import Icon from "@mui/material/Icon"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import React from "react"

interface AddPassengerProps {
  onClick: () => void
}

const AddPassengerButton: React.FC<AddPassengerProps> = ({ onClick }) => {
  return (
    <Button className="floatingButton" variant="contained" onClick={onClick}>
      <Stack direction="column" spacing={0}>
        <Typography variant="caption">Agregar</Typography>
        <Typography variant="caption">pasajero</Typography>
        <Icon sx={{ alignSelf: "center" }}>
          <AddIcon></AddIcon>
        </Icon>
      </Stack>
    </Button>
  )
}

export default AddPassengerButton
