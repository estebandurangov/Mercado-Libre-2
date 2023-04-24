import { AiOutlineCreditCard, AiOutlineDropbox } from "react-icons/ai"
import { MdSecurity } from "react-icons/md";

const Info = () => {
  return (
    <div className="bg-white py-10 mt-6">
        <div className="index-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-x-2">
                <Card 
                icon={<AiOutlineCreditCard/>} 
                titulo="Paga con tarjeta o en efectivo" 
                texto="Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!" 
                link="Cómo pagar con Mercado Pago"/>

                <Card 
                icon={<AiOutlineDropbox/>} 
                titulo="Envío gratis desde $ 90.000" 
                texto="Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados." 
                link="Conoce más sobre este beneficio"/>

                <Card 
                icon={<MdSecurity/>} 
                titulo="Seguridad, de principio a fin" 
                texto="¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido." 
                link="Cómo te protegemos"/>
            </div>
        </div>
    </div>
    
  )
}

interface CardProps{
    icon: JSX.Element;
    titulo: string;
    texto: string;
    link: string;
}

const Card = ({icon, titulo, texto, link}: CardProps) => {
    return (
        <div className="flex flex-col text-center items-center gap-3">
            <div className="text-[70px]">{icon}</div>
            <h3 className="text-xl font-bold">{titulo}</h3>
            <p className="text-slate-400">{texto}</p>
            <span className="text-azul">{link}</span>
        </div>
    )
}

export {Info}