"use client"

import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import { useRouter } from "next/navigation"
import React from "react"
import PageTitle from "../atoms/texts/PageTitle"

function HomePage() {

  const router = useRouter()

  const handelClick = () => {
    router.push("/reservas-a/reserva")
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
        <Button variant="contained" onClick={handelClick}>
          Realizar Reserva
        </Button>
      </Stack>
    </Toolbar>
  </AppBar>
  )
}

export default HomePage