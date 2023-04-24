import { CarProduct, Producto, useCarContext } from '@/context/carContext';
import { Modal } from './Modal';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import _ from 'lodash';
import Image from 'next/image';
import { toast } from 'react-toastify';

const Carrito = () => {
  const { openCar, setOpenCar, itemsCar, setItemsCar, countItems } = useCarContext();
  const updateItem = (producto:Producto, n:number) => {
        const productToCar:CarProduct = {
            producto:producto,
            cantidad:0
        };
        const itemIsInCar = (_.size(_.filter(itemsCar, item => item?.producto === productToCar.producto)))
        if (itemIsInCar){
          const indice = itemsCar.findIndex(item => item.producto === producto)
          itemsCar[indice].cantidad += n
          setItemsCar(itemsCar)
          if (itemsCar[indice].cantidad <= 0)  {
            setItemsCar(itemsCar.filter((item) => item.producto !== producto))
          } 
        }
        
        toast.success('Carrito Actualizado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setOpenCar(false)
        setTimeout(() => setOpenCar(true), 10)
    };

  return (
    <Modal open={openCar} setOpen={setOpenCar} titulo='Carrito de Compras'>
      <>
      <table className='text-center'>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemsCar.map(p => {
            return(
              <tr key={p.producto.nombre}>
                <td className='flex gap-3 items-center'>
                  <div>{<Image src={p.producto.image} alt={p.producto.nombre} width={50} height={50}/>}</div>  
                  <div>{p.producto.nombre}</div>
                </td>
                <td>{p.producto.precio}</td>
                <td>{p.cantidad}</td>
                <td>{p.producto.precio*p.cantidad}</td>
                <td>
                  <div className='flex gap-1'>
                    <button onClick={() => updateItem(p.producto,1)}>
                    <AiOutlinePlus />
                    </button>
                    <button>
                    <AiOutlineMinus onClick={() => updateItem(p.producto,-1)} />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='flex justify-end gap-3 text-white font-bold'>
        <button className='rounded py-2 px-3 bg-verde'>Comprar</button>
        <button className='rounded py-2 px-3 bg-red-700' onClick={() => (setOpenCar(false))}>Cancelar</button>
      </div>
      </>
    </Modal>
  );
};

export { Carrito };
