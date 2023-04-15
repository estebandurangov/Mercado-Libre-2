
import { MediosPago } from '@/components/MediosPago'
import { Nav } from '@/components/Nav'
import { Ofertas } from '@/components/Ofertas'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const sections = {
  mediosDePago: [
      {
          image: '/media/medios_pago/tarjeta.png',
          descripcion: 'Hasta 48 cuotas'
      },
      {
          image: '/media/medios_pago/transferencia.png',
          descripcion: 'Transferencia desde tu banco'
      },
      {
          image: '/media/medios_pago/efectivo.png',
          descripcion: 'Paga en efectivo'
      },
      {
          image: '/media/medios_pago/ver_mas.png',
          descripcion: 'Más medios de pago'
      },
  ],
  ofertas: [
    {
      nombre: 'silla',
      image: '/media/ofertas/silla.png',
      precio: 210000,
      descuento: 32
    },
    {
      nombre: 'microfono',
      image: '/media/ofertas/microfono.png',
      precio: 74990,
      descuento: 25
    },
    {
      nombre: 'afeitar',
      image: '/media/ofertas/afeitar.png',
      precio: 134950,
      descuento: 50
    },
    {
      nombre: 'ropero',
      image: '/media/ofertas/ropero.png',
      precio: 149900,
      descuento: 30
    },
    {
      nombre: 'cortina',
      image: '/media/ofertas/cortina.png',
      precio: 69990,
      descuento: 17
    },
  ]
}

const index = () => {
  return (
    <>
    <Head>
      <title>Mercado Libre</title>
    </Head>
    <div className='flex flex-col bg-slate-200 w-screen h-screen'>
      <Nav/>
      <div className='flex w-full '>
        <Image src='/media/portada.jpg' alt='portada' width={1512} height={341} className='w-full'/>
      </div>
      <div className='flex w-2/3 justify-evenly py-6 mx-auto my-7 bg-white rounded-md'>
        {sections.mediosDePago.map((medio, index) => {
          return (
            <MediosPago
              key={`medio${index}`}
              descripcion={medio.descripcion}
              image={medio.image}
            />
          );
        })}
      </div>
      <div className='flex w-2/3 mx-auto justify-between'>
        {sections.ofertas.map((oferta, index) =>{
          return (
            <Ofertas
              key={oferta.nombre}
              nombre={oferta.nombre}
              precio={oferta.precio}
              image={oferta.image}
              descuento={oferta.descuento}
            />
          );
        } )}
      </div>
    </div>
    </>
  )
}

export default index
