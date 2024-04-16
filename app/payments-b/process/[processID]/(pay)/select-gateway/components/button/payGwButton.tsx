import Image from "next/image"
import { payGateways } from "@/../enum/paymentsGateways"
import epayco from "@/../public/ePaycoLogo.png"
import mercadoPago from "@/../public/mercadoPagoLogo.svg"
import paypal from "@/../public/PaypalLogo.png"
import payu from "@/../public/PayULogo.png"
import placetoPay from "@/../public/placeToPayLogo.png"
import wompi from "@/../public/WompiLogoPrincipal.png"

interface btnProps {
  gateWay: payGateways
}

export const PayGwButton = (gateway: btnProps) => {
  const getUrl = (gateway: payGateways) => {
    switch (gateway) {
      case payGateways.WOMPI:
        return wompi
      case payGateways.PAYPAL:
        return paypal
      case payGateways.PAYU:
        return payu
      case payGateways.EPAYCO:
        return epayco
      case payGateways.MERCADOPAGO:
        return mercadoPago
      case payGateways.PLACETOPAY:
        return placetoPay
      default:
        throw new Error("Pasarela de pago no válida")
    }
  }
  const url = getUrl(gateway.gateWay)

  return (
    <button className="relative m-5 flex h-[100px] w-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-[5px] border border-solid border-[black]">
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
