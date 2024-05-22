import Image from "next/image"
import bancolombia from "@/../public/BancolombiaLogo.svg"
import gettrx from "@/../public/gettrxLogo.png"
import mercadoPago from "@/../public/mercadoPagoLogo.svg"
import paypal from "@/../public/PayPalLogo.png"
import payu from "@/../public/PayULogo.png"
import pse from "@/../public/pse-logo.png"
import stripe from "@/../public/stripeLogo.webp"
import wompi from "@/../public/WompiLogoPrincipal.png"
import { useRouter } from "next/navigation"


interface btnProps {
  gatewayName: string,
  processID: string
}

export const PayGwButton = ({ gatewayName,processID }: btnProps) => {
  const router= useRouter()
  const upperGateway = gatewayName.toUpperCase()
  const getUrl = (upperGateway: string) => {
    switch (upperGateway) {
      case "WOMPI".toUpperCase():
        return wompi
      case "paypal".toUpperCase():
        return paypal
      case "payu".toUpperCase():
        return payu
      case "mercadopago".toUpperCase():
        return mercadoPago
      case "PSE".toUpperCase():
        return pse
      case "Bancolombia".toUpperCase():
        return bancolombia
      case "GetTrx".toUpperCase():
        return gettrx
      case "Stripe".toUpperCase():
        return stripe
      default:
        // throw new Error("Pasarela de pago no válida")
    }
  }
  const url = getUrl(upperGateway)

  const redirect = () => {
    router.push(`/payments-b/process/${processID}/select-method`)
  }

  return (
    <button className="relative m-5 flex h-[100px] w-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-[5px] border border-solid border-[black]" onClick={()=>{redirect()}}>
      <Image
        src={url}
        width={250}
        height={100}
        alt={"Logo pasarela de pago"}
        className="block h-auto w-full object-cover transition-[filter] duration-[0.3s] ease-[ease]"
      />
    </button>
  )
}
export default PayGwButton
