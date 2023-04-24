import { CarProduct, Producto, useCarContext } from "@/context/carContext";
import _, { divide } from "lodash";
import { toast } from "react-toastify";

interface CarOptionsProps {
    accion : number;
    producto: Producto;
}

const CarOptions = ({producto, accion}:CarOptionsProps) => {
    console.log("asd")
    if (accion=1){
        console.log('agregando')
        //addItem(producto)
    }
    return(<></>)
}


const addItem = (producto:Producto) => {

/*
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
*/
};

export {CarOptions, addItem}