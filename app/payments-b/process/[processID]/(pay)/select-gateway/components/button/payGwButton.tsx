import Image from "next/image";

import wompi from "@/../public/WompiLogoPrincipal.png";
import { payGateways } from "@/../enum/paymentsGateways";

interface btnProps {
    gateWay: payGateways;
}

export const PayGwButton = (gateway: btnProps) => {
    const getUrl = (gateway: payGateways) => {
        switch (gateway) {
            case payGateways.WOMPI:
                return wompi;
            default:
                throw new Error("Pasarela de pago no válida");
        }
    };
    const url = getUrl(gateway.gateWay);

    return (
        <button className="h-[100px] w-[250px] m-5 flex justify-center items-center relative overflow-hidden cursor-pointer border rounded-[5px] border-solid border-[black]">
            <Image
                src={url}
                width={250}
                height={100}
                alt="Logo de Wompi"
                className="block w-full h-auto transition-[filter] duration-[0.3s] ease-[ease] object-cover"
            />
        </button>
    );
};
export default PayGwButton;
