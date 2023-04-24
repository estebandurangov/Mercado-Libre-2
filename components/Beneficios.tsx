import Image from "next/image";

const Beneficios = () => {
  return (
    <div className="">
        <div className="hidden md:flex md:justify-between gap-3">
            <BeneficioDesktop titulo="Sin cargo con el nivel 6" span="Disney+ y Star+" opcional="" image="/media/beneficios/comboplus.png"/>
            <BeneficioDesktop titulo="Hasta 50% OFF" span="HBO Max" opcional="7 DÍAS GRATIS" image="/media/beneficios/hbo.png"/>
            <BeneficioDesktop titulo="Hasta 50% OFF" span="Paramount+" opcional="7 DÍAS GRATIS" image="/media/beneficios/param.png"/>
        </div>
        <div className="flex flex-col justify-between gap-3 md:hidden bg-white divide-y divide-solid">
            <Beneficio titulo="Sin cargo con el nivel 6" span="Disney+ y Star+" opcional="" image="/media/beneficios/comboplus.png"/>
            <Beneficio titulo="Hasta 50% OFF" span="HBO Max" opcional="7 DÍAS GRATIS" image="/media/beneficios/hbo.png"/>
            <Beneficio titulo="Hasta 50% OFF" span="Paramount+" opcional="7 DÍAS GRATIS" image="/media/beneficios/param.png"/>
        </div>
    </div>
  )
}

interface BeneficioProps{
    titulo: string;
    span: string;
    image: string;
    opcional: string;
}

const BeneficioDesktop = ({titulo, span, opcional, image}: BeneficioProps) => {
    return (
        <div className="flex items-end h-[250px] w-1/3 bg-cover bg-no-repeat bg-center img-fondo p-6 rounded-lg" >
            <div className="flex items-center gap-3 ">
                <div>
                    <Image src={image} alt={titulo} width={80} height={80}/>
                </div>
                <div className="text-white font-bold">
                    <span className="text-xs">{opcional}</span>
                    <h5 className="text-xl lg:text-2xl ">{titulo}</h5>
                    <span className="text-lg font-medium">{span}</span>
                </div>
            </div>
        </div>
    )
}

const Beneficio = ({titulo, span, opcional, image}: BeneficioProps) => {
    return(
        <div className="flex items-center gap-3 ">
            <div>
                <Image src={image} alt={titulo} width={80} height={80}/>
            </div>
            <div className="font-bold">
                <span className="text-xs">{opcional}</span>
                <h5 className="text-xl lg:text-2xl ">{titulo}</h5>
                <span className="text-lg font-medium">{span}</span>
            </div>
        </div>
    )
}

export {Beneficios}