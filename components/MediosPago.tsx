import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface MediosPagoProps{
    image: JSX.Element;
    descripcion: string;
}

const MediosPago = ({image, descripcion}: MediosPagoProps) => {
  return (
    <div className='flex items-center gap-x-2.5 p-3'>
        <div className='border rounded-full text-azul p-3 text-3xl'>
          {image}
        </div>
        
        <div className='flex flex-col'>
            <span>{descripcion}</span>
            <Link href="" className='text-azul'>Ver Más</Link>
        </div>
    </div>
  )
}

export {MediosPago}