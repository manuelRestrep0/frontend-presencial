import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Copyright from "components/copyright/copyringht"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen items-center justify-center bg-[url(https://i.ibb.co/NCzv6vC/image-2.png)] bg-cover bg-center bg-no-repeat text-[black]">
      <div className="flex h-[80vh] w-[55vw] flex-col items-center justify-center rounded-[2.5%] bg-[#208EE6]">
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            height: "90%",
          }}
        >
          <CssBaseline />
          {children}
        </Container>
        <Copyright color="white" />
      </div>
    </div>
  )
}
