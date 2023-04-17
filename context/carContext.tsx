import { Dispatch, SetStateAction, useContext, useState, createContext } from "react";

interface CarContextProps{
    openCar: boolean ;
    setOpenCar: Dispatch<SetStateAction<boolean>>;
    itemsCar: Producto[];
    setItemsCar: Dispatch<SetStateAction<Producto[]>>;
}

const CarContext = createContext<CarContextProps>(
    {} as CarContextProps
);

export const useCarContext = () => useContext(CarContext);

interface Producto{
    image: string;
    nombre: string;
    precio: number;
    descuento: number;
}

interface CarContextProviderProps{
    children: JSX.Element;
}

const CarContextProvider = ({children}: CarContextProviderProps) => {
    const [openCar, setOpenCar] = useState<boolean>(false);
    const [itemsCar, setItemsCar] = useState<Producto[]>([]);

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
export type { Producto };
