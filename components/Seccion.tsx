
interface SeccionProps{
    children: JSX.Element;
    titulo: string;
    link: string;
}

const Seccion = ({children, titulo, link}:SeccionProps) => {
  return (
    <div className="flex flex-col index-container gap-3">
        <div className="flex px-1 items-end gap-3 ">
            <h3 className="text-gris text-2xl">{titulo}</h3>
            <span className="text-azul text-base cursor-pointer">{link}</span>
        </div>
        {children}
    </div>
  )
}

export {Seccion}