import Image from 'next/image';

const Footer = () => (
  <>
    <footer className='border-t bg-white p-6'>
      <div className='index-container flex flex-col gap-3 text-center text-sm'>
        <div className='grid grid-cols-2 gap-3 md:flex '>
          <span>Trabaja con nosotros</span>
          <span>Términos y condiciones</span>
          <span>Cómo cuidamos tu privacidad</span>
          <span>Accesibilidad</span>
          <span>Ayuda / PQR</span>
          <span>www.sic.gov.co</span>
        </div>
        <span className='text-slate-400 md:text-left'>
          Copyright © 1999-2023 MercadoLibre Colombia LTDA.
        </span>
        <span className='text-slate-400 md:text-left'>
          Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
        </span>
        <div className='grid grid-cols-1 md:flex gap-3'>
          <Image
            src={'/media/footer/super.png'}
            alt='superintendencia'
            width={141}
            height={31} />
          <Image
            src={'/media/footer/pum.png'}
            alt='Pare y compare'
            width={200}
            height={35} />
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
