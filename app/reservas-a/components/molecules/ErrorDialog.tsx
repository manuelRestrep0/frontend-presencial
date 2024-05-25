import React from "react"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"

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
