import React from 'react'
import Image from 'next/image';
import { useCarContext, Producto, CarProduct,  } from '@/context/carContext';
import _ from 'lodash';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.success('Carrito Actualizado', {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
  };


  return (
  <>
    <div onClick={addItem} className='flex flex-col bg-white cursor-pointer rounded pl-4 pb-14'>
      <Image src={producto.image} alt={producto.nombre} width={225} height={225}/>
      <div className='flex items-center gap-2'>
          <span className='text-2xl'>{producto.precio}</span>
          <span className='text-sm text-verde'> {producto.descuento}% off </span>
      </div>
      <div>
          <span className='text-verde font-semibold'>Envío gratis</span>
      </div>
    </div>
  </>
  )
}

export  {Ofertas}