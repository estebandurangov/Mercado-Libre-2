const Beneficios = () => {
  return (
    <div className="index-container">
        <div className="flex ">
            <Beneficio titulo="Sin cargo con el nivel 6" span="Disney+ y Star+" opcional="" image=""/>
            <Beneficio titulo="Hasta 50% OFF" span="HBO Max" opcional="7 DÍAS GRATIS" image=""/>
            <Beneficio titulo="Hasta 50% OFF" span="Paramount+" opcional="7 DÍAS GRATIS" image=""/>
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

const Beneficio = ({titulo, span, opcional}: BeneficioProps) => {
    return (
        <div className="w-1/3">
            <div>
            </div>
            <div>
                <span>{opcional}</span>
                <h5>{titulo}</h5>
                <span>{span}</span>
            </div>
            
        </div>
    )
}

export default Beneficios