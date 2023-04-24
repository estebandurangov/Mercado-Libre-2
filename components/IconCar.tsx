import { useCarContext } from "@/context/carContext";
import { useEffect } from "react";
import { MdShoppingCart } from "react-icons/md"

const IconCar = () => {
    const {setOpenCar, countItems, setCountItems, itemsCar} = useCarContext();

    useEffect(() => {
        setCountItems(itemsCar.length)
    }, [itemsCar])
    
  return (
    <div className="relative cursor-pointer" onClick={() => (setOpenCar(true))}>
    <MdShoppingCart size={24} />
    {countItems > 0 && (
      <div className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
        {countItems}
      </div>
    )}
  </div>
  )
}

export {IconCar}