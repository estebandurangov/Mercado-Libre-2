import { MediosPago } from '@/components/MediosPago';
import { Nav } from '@/components/Nav';
import { Ofertas } from '@/components/Ofertas';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { CarContextProvider, useCarContext } from '@/context/carContext';
import { Carrito } from '@/components/modals/Carrito';
import { data } from '@/utils/data';
import { Suscripciones } from '@/components/Suscripciones';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/Footer';
import { Seccion } from '@/components/Seccion';
import { Beneficios } from '@/components/Beneficios';
import { Categorias } from '@/components/Categorias';
import { Info } from '@/components/Info';

const index = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8'></meta>
        <title>Mercado Libre</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
      </Head>
      <div className='flex h-full w-screen flex-col bg-slate-200 '>
        <CarContextProvider>
          <>
            <Nav />
            <div className='hidden w-full md:flex'>
              <Image
                src='/media/portada.jpg'
                alt='portada'
                width={1512}
                height={341}
                className='w-full'
              />
            </div>
            <div className='mx-2 my-7 grid grid-cols-1 justify-evenly divide-y divide-solid rounded-md bg-white py-6 md:flex md:divide-none lg:mx-auto lg:w-2/3'>
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
            <Seccion titulo='Ofertas' link='Ver todas'>
              <div className='mx-2 grid grid-cols-2 justify-evenly gap-4 md:flex lg:mx-auto'>
              {data.productos.map((oferta, index) => {
                return <Ofertas key={oferta.nombre} producto={oferta} />;
              })}
              </div>
            </Seccion>
            
            <div>
              <Suscripciones />
            </div>

            <Seccion titulo='Beneficios de Mercado Puntos' link='Ver todos los beneficios'>
              <Beneficios/>
            </Seccion>

            <Seccion titulo='Categorías populares' link=''>
              <Categorias/>
            </Seccion>

            <Info/>

            <Footer />

            <Carrito />
            <ToastContainer />
          </>
        </CarContextProvider>
      </div>
    </>
  );
};

export default index;
