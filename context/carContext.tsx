import { Dispatch, SetStateAction, useContext, useState, createContext } from "react";

interface CarContextProps{
    openCar: boolean ;
    setOpenCar: Dispatch<SetStateAction<boolean>>;
    itemsCar: CarProduct[];
    setItemsCar: Dispatch<SetStateAction<CarProduct[]>>;
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

    return(
        <CarContext.Provider 
        value={{
            openCar,
            setOpenCar,
            itemsCar,
            setItemsCar
        }}>
            {children}
        </CarContext.Provider>
    )

}



export { CarContextProvider };
export type { Producto, CarProduct };