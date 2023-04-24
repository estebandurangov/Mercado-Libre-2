import { Dispatch, SetStateAction, useContext, useState, createContext } from "react";

interface CarContextProps{
    openCar: boolean ;
    setOpenCar: Dispatch<SetStateAction<boolean>>;
    itemsCar: CarProduct[];
    setItemsCar: Dispatch<SetStateAction<CarProduct[]>>;

    countItems: number;
    setCountItems: Dispatch<SetStateAction<number>>;

}
interface Producto{
    image: string;
    nombre: string;
    precio: number;
    descuento: number;
}

interface CarProduct{
    producto: Producto;
    cantidad: number;
}

const CarContext = createContext<CarContextProps>(
    {} as CarContextProps
);

export const useCarContext = () => useContext(CarContext);

interface CarContextProviderProps{
    children: JSX.Element;
}

const CarContextProvider = ({children}: CarContextProviderProps) => {
    const [openCar, setOpenCar] = useState<boolean>(false);
    const [itemsCar, setItemsCar] = useState<CarProduct[]>([]);
    const [countItems, setCountItems] = useState<number>(0);

    return(
        <CarContext.Provider 
        value={{
            openCar,
            setOpenCar,
            itemsCar,
            setItemsCar,
            countItems,
            setCountItems
        }}>
            {children}
        </CarContext.Provider>
    )

}



export { CarContextProvider };
export type { Producto, CarProduct };