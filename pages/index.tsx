
import { MediosPago } from '@/components/MediosPago'
import { Nav } from '@/components/Nav'
import { Ofertas } from '@/components/Ofertas'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { CarContextProvider, useCarContext } from '@/context/carContext';
import {Carrito} from '@/components/modals/Carrito';
import { data } from '@/utils/data';
import { Prueba } from '@/components/Prueba'


const index = () => {
  
  const {setItemsCar, itemsCar} = useCarContext(); 

  return (
    <>
    <Head>
      <title>Mercado Libre</title>
    </Head>
    <div className='flex flex-col bg-slate-200 w-screen h-full '>
      <CarContextProvider>
        <>
        <Nav/>
        <div className='hidden md:flex w-full'>
          <Image src='/media/portada.jpg' alt='portada' width={1512} height={341} className='w-full'/>
        </div>
        <div className='grid grid-cols-1 mx-2 divide-y divide-solid md:divide-none md:flex lg:w-2/3 justify-evenly py-6 lg:mx-auto my-7 bg-white rounded-md'>
          {data.mediosDePago.map((medio, index) => {
            return (
              <MediosPago
                key={`medio${index}`}
                descripcion={medio.descripcion}
                image={medio.image}
              />
            );
          })}
        </div>
        <div className='grid grid-cols-2 mx-2 md:flex lg:w-2/3 justify-evenly lg:mx-auto gap-4'>
          {data.productos.map((oferta, index) =>{
            return (
              <Ofertas
                key={oferta.nombre}
                producto={oferta}
              />
            );
          } )}
        </div>
        <Prueba/>
        <Carrito/>
        </>
      </CarContextProvider>
      
    </div>
    </>
  )
}

export default index
