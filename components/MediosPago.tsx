import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface MediosPagoProps{
    image: string;
    descripcion: string;
}

const MediosPago = ({image, descripcion}: MediosPagoProps) => {
  return (
    <div className='flex gap-x-2.5'>
        <Image src={image} alt={descripcion} width={50} height={50}/>
        <div className='flex flex-col'>
            <span>{descripcion}</span>
            <Link href="">Ver Más</Link>
        </div>
    </div>
  )
}

export {MediosPago}