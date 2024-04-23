import { Typography } from "@mui/material"
import Image from "next/image"
import bancolombia from "@/../public/BancolombiaLogo.png"
import nequi from "@/../public/nequiLogo.png"
import pse from "@/../public/psePrincipalLogo.svg"
import visa from "@/../public/VisaLogo.png"
import { payMethods } from "enum/paymentMethods"

interface btnProps {
  method: payMethods
  text: String
}

export default function PayMethodButton(method: btnProps) {
  const getUrl = (method: payMethods) => {
    switch (method) {
      case payMethods.CARDS:
        return visa
      case payMethods.TRANSFER:
        return bancolombia
      case payMethods.NEQUI:
        return nequi
      case payMethods.PSE:
        return pse
      default:
        throw new Error("Método de pago no válida")
    }
  }

  const url = getUrl(method.method)

  return (
    <button className="relative m-5 mb-1 flex h-[60px] w-[300px] cursor-pointer items-center justify-start overflow-hidden rounded-[5px] bg-[#E1DDDD] shadow-[0_8px_8px_0_rgba(0,0,0,0.5)]">
      <Image src={url} width={50} height={50} alt={"Logo método de pago"} className="ml-2.5" />
      <Typography sx={{ marginLeft: "10px", color: "#444343" }}>{method.text}</Typography>
    </button>
  )
}
