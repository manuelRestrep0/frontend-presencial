import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import React from "react"

interface EventDialogProps {
  open: boolean
  onClose: () => void
  title: string
  message: string
  baseId: string
}

const EventDialog: React.FC<EventDialogProps> = ({ open, onClose, title, message, baseId }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby={`${baseId}-title`} aria-describedby={`${baseId}-message`}>
      <DialogTitle id={`${baseId}-title`}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id={`${baseId}-message`}>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} type="button" id={`${baseId}-button`}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EventDialog
