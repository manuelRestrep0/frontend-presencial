import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[black] h-screen flex justify-center items-center bg-[url(https://i.ibb.co/NCzv6vC/image-2.png)] bg-no-repeat bg-cover bg-center">
      <div className="h-[75vh] w-[55vw] bg-[#208EE6] flex justify-center items-center rounded-[2.5%]">
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            height: "95%",
          }}
        >
          <CssBaseline />
          {children}
        </Container>
      </div>
    </div>
  );
}