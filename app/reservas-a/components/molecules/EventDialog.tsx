import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import React from "react"

interface EventDialogProps {
  open: boolean
  onClose: () => void
  title: string
  message: string
}

const EventDialog: React.FC<EventDialogProps> = ({ open, onClose, title, message }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-message">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-message">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} type="button" id="alert-dialog-button">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EventDialog
