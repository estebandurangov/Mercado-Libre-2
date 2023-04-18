import { useCarContext } from '@/context/carContext';
import { Modal } from './Modal';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import _, { countBy, keys, map } from 'lodash';
import Image from 'next/image';

const Carrito = () => {
  const { openCar, setOpenCar, itemsCar } = useCarContext();
  //console.log(itemsCar)
  //console.log(_.filter(itemsCar, item => item?.nombre === 'cortina')[0])
  return (
    <Modal open={openCar} setOpen={setOpenCar} titulo='Carrito de Compras'>
      <table className='text-center'>
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
           {/*Object.keys(listCar).map((producto, index) => {
            const item = _.filter(itemsCar, item => item?.nombre === producto)
            const cantidad = _.size(item)
                return (
                    <tr key={index}>
                        <td><div className=''><Image src={item[0].image} alt={item[0].nombre} width={50} height={50}/></div></td>
                        <td><h3 className='font-semibold'> {producto} </h3></td>
                        <td>{item[0].precio}</td>
                        <td>{cantidad}</td>
                        <td>
                            <div className='flex gap-1'>
                                <button>
                                <AiOutlinePlus />
                                </button>
                                <button>
                                <AiOutlineMinus />
                                </button>
                            </div>
                        </td>
                    </tr>
                );
            })*/} 
        </tbody>
      </table>
    </Modal>
  );
};

export { Carrito };
