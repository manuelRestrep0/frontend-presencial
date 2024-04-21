import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { ReactNode } from "react"
import backgroundImage from "../../assets/asset-avion.png"

export default function AuthLayout({ children }: { children: ReactNode }) {
  const blueBackground = { backgroundColor: "#2377C5", height: "100vh", display: "grid" }
  const imgAvion = { alignSelf: "center", marginTop: "30%", width: "100%" }
  return (
    <Grid container>
      <Grid item xs={6}>
        {children}
      </Grid>

      <Grid item xs={6} style={blueBackground}>
        <Container>
          <Image src={backgroundImage} style={imgAvion} alt="logo" />
          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "74%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h4" component="h2" style={{ fontWeight: "bold" }}>
              Fabrica Escuela Airlines
            </Typography>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}
