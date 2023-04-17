import React from 'react'
import Image from 'next/image';
import { useCarContext, Producto } from '@/context/carContext';
import _ from 'lodash';

interface OfertasProps{
    producto: Producto;
}

const Ofertas = ({producto}:OfertasProps) => {

    const {setItemsCar, itemsCar} = useCarContext(); 

    const addItem = () => {
      setItemsCar((prev) => [...prev, producto]);
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