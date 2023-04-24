import { AiOutlineCar, AiOutlineCamera, AiOutlineTool } from "react-icons/ai";
import { MdOutlineChair, MdPhoneIphone, MdOutlineSmartToy } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { GiClothes, GiWashingMachine, GiLipstick, GiConsoleController } from "react-icons/gi";
import {TbSteeringWheel} from "react-icons/tb";
import {GrMicrophone} from "react-icons/gr";
import {BiFootball} from "react-icons/bi";


const Categorias = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-7 gap-1'>
        <Categoria text={"Carros, Motos y Otros"} icon={<AiOutlineCar/>}/>
        <Categoria text={"Computación"} icon={<RiComputerLine/>}/>
        <Categoria text={"Ropa y Accesorios"} icon={<GiClothes/>}/>
        <Categoria text={"Hogar y Muebles"} icon={<MdOutlineChair/>}/>
        <Categoria text={"Accesorios para Vehículos"} icon={<TbSteeringWheel/>}/>
        <Categoria text={"Electrodomésticos"} icon={<GiWashingMachine/>}/>
        <Categoria text={"Cámaras y Accesorios"} icon={<AiOutlineCamera/>}/>
        <Categoria text={"Celulares y Teléfonos"} icon={<MdPhoneIphone/>}/>
        <Categoria text={"Belleza y Cuidado Personal"} icon={<GiLipstick/>}/>
        <Categoria text={"Deportes y Fitness"} icon={<BiFootball/>}/>
        <Categoria text={"Electrónica, Audio y Video"} icon={<GrMicrophone/>}/>
        <Categoria text={"Consolas y Videojuegos"} icon={<GiConsoleController/>}/>
        <Categoria text={"Juegos y Juguetes"} icon={<MdOutlineSmartToy/>}/>
        <Categoria text={"Herramientas"} icon={<AiOutlineTool/>}/>
    </div>
  )
}

interface CategoriaProps{
    icon:JSX.Element;
    text:String;
}

const Categoria = ({icon, text}: CategoriaProps) => {
    return(
        <div className='flex flex-col text-center items-center p-8 bg-white '>
            <div className="text-4xl  text-azul ">{icon}</div>
            <span>{text}</span>
        </div>
    )
}

export {Categorias}