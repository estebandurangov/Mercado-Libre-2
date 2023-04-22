import Image from "next/image";


const Suscripciones = () => {
  return (
    <div className="index-container">
        <div className="flex justify-between w-full bg-gradient-to-r from-gradient to-endGradient text-white p-6 rounded-t-md">
            <h4 className="text-3xl font-bold">Suscríbete al nivel 6</h4>
            <div className="flex flex-col">
                <span className="text-sm  line-through">$ 50.690</span>
                <span className="text-xl font-bold">$ 17.899<span className="text-base font-normal">/mes</span></span>
            </div>
        </div>
        <div className="flex flex-col bg-white p-6 gap-4">
            <div><span>Consigue los mejores beneficios en Mercado Libre</span></div>
            <div className="flex justify-between items-center">
                <Suscripcion image="/media/suscripciones/camion.png" suscripcion="Disney+ sin cargo"/>
                <Suscripcion image="/media/suscripciones/star.png" suscripcion="Star+ sin cargo"/>
                <Suscripcion image="/media/suscripciones/camion.png" suscripcion="Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000"/>
            </div>
            <div className="flex justify-end pt-3 border-t border-inherit">
                <button className="px-3 py-2 bg-azul text-base font-bold text-white rounded">Suscríbete</button>
            </div>
        </div>
    </div>
  )
}

interface SuscripcionProps{
    image: string;
    suscripcion: string;
}

const Suscripcion = ({image, suscripcion}:SuscripcionProps) => {
    return (
        <div className="flex items-center lg:w-1/4">
            <Image src={image} alt={suscripcion} width={72} height={72}/>
            <span>{suscripcion}</span>
        </div>
    )
}

export {Suscripciones}