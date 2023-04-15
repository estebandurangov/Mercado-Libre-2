import React from 'react'
import Image from 'next/image';

interface OfertasProps{
    nombre: string;
    image: string;
    precio: number;
    descuento: number;

}

const Ofertas = ({nombre, image, precio, descuento}:OfertasProps) => {
  return (
    <div className='flex flex-col bg-white rounded pl-4 pb-14'>
        <Image src={image} alt={nombre} width={225} height={225}/>
        <div className='flex'>
            <span>{precio}</span>
            <span>{descuento}</span>
        </div>
        <div>
            <span>Envío gratis</span>
        </div>
    </div>
  )
}

export  {Ofertas}