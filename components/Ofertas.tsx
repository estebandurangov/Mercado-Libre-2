import React from 'react'
import Image from 'next/image';
import { useCarContext, Producto, CarProduct } from '@/context/carContext';
import _, { keysIn } from 'lodash';

interface OfertasProps{
    producto: Producto;
}

const Ofertas = ({producto}:OfertasProps) => {

    const {setItemsCar, itemsCar} = useCarContext(); 

    const addItem = () => {
      const productToCar:CarProduct = {
        producto:producto,
        cantidad:0
      };

      const itemIsInCar = (_.size(_.filter(itemsCar, item => item?.producto === productToCar.producto)))
      if (!itemIsInCar){
        productToCar.cantidad += 1;
        setItemsCar((prev) => [...prev, productToCar]);
      }else{
        const indice = itemsCar.findIndex(item => item.producto === producto)
        itemsCar[indice].cantidad += 1
        setItemsCar(itemsCar)
      }
    };

  return (
  <>
    <input type="hidden" name={producto.nombre} />
    <button onClick={addItem}>
      <div className='flex flex-col bg-white rounded pl-4 pb-14'>
        <Image src={producto.image} alt={producto.nombre} width={225} height={225}/>
        <div className='flex'>
            <span>{producto.precio}</span>
            <span>{producto.descuento}</span>
        </div>
        <div>
            <span>Envío gratis</span>
        </div>
      </div>
    </button>
  </>
  )
}

export  {Ofertas}