import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import { useRouter } from "next/navigation"
import React from "react"
import PageTitle from "../atoms/texts/PageTitle"

interface SitasAppBarProps {
  onHistoryClick?: () => void
  onBackClick: () => void
}

const SitasAppBar: React.FC<SitasAppBarProps> = ({ onHistoryClick, onBackClick }) => {
  const router = useRouter()

  if (onHistoryClick === undefined) {
    onHistoryClick = () => {
      router.push("/reservas-a/history")
    }
  }

  return (
    <AppBar component="nav" sx={{ bgcolor: "white" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        ></IconButton>
        <PageTitle text="Singapur Airlines" />
        <Stack direction="row" spacing={10}>
          <Button variant="contained" onClick={onHistoryClick} id='btn-his'>
            Historial
          </Button>
          <Button variant="contained" onClick={onBackClick} id='btn-back'>
            Regresar
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default SitasAppBar
