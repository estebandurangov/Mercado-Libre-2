import { CarContextProvider, useCarContext } from "@/context/carContext";
import { Dispatch, SetStateAction } from "react";
import { data } from "@/utils/data";

  const Prueba = () => {
    const {setItemsCar, itemsCar} = useCarContext(); 
    return (
        <div className='flex flex-col items-center gap-3 p-10'>
                 
        </div>
    );
  };
  
  export {Prueba};