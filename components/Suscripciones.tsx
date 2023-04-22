

const Suscripciones = () => {
  return (
    <div className="index-container">
        <div className="flex justify-between w-full bg-gradient-to-r from-gradient to-endGradient text-white p-6 rounded-t-md">
            <h4>Suscríbete al nivel 6</h4>
            <div className="flex flex-col">
                <span>$ 50.690</span>
                <span>$ 17.899<span>/mes</span></span>
            </div>
        </div>
        <div className="bg-white p-6">
            <div><span>Consigue los mejores beneficios en Mercado Libre</span></div>
            <div className="flex justify-between items-center">
                <div className="lg:w-1/3">
                    <span>Disney+ sin cargo</span>
                </div>
                <div className="lg:w-1/3">
                    <span>Star+ sin cargo</span>
                </div>
                <div className="lg:w-1/3">
                    <span>Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</span>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="px-2 py-1 bg-azul rounded">Suscríbete</button>
            </div>
        </div>
    </div>
  )
}

export {Suscripciones}