import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import React from "react"

interface ErrorDialogProps {
  open: boolean
  onClose: () => void
  message: string
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ open, onClose, message }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-message">
      <DialogTitle id="alert-dialog-title">Error</DialogTitle>
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

export default ErrorDialog
