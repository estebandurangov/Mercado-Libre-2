import { MdCreditCard, MdMoreHoriz, MdOutlineDomain, MdOutlinePayments } from "react-icons/md";

const data = {
    mediosDePago: [
        {
            image: <MdCreditCard/>,
            descripcion: 'Hasta 48 cuotas'
        },
        {
            image: <MdOutlineDomain/>,
            descripcion: 'Transferencia desde tu banco'
        },
        {
            image: <MdOutlinePayments/>,
            descripcion: 'Paga en efectivo'
        },
        {
            image: <MdMoreHoriz/>,
            descripcion: 'Más medios de pago'
        },
    ],
    productos: [
      {
        nombre: 'silla',
        image: '/media/ofertas/silla.png',
        precio: 210000,
        descuento: 32
      },
      {
        nombre: 'microfono',
        image: '/media/ofertas/microfono.png',
        precio: 74990,
        descuento: 25
      },
      {
        nombre: 'afeitar',
        image: '/media/ofertas/afeitar.png',
        precio: 134950,
        descuento: 50
      },
      {
        nombre: 'ropero',
        image: '/media/ofertas/ropero.png',
        precio: 149900,
        descuento: 30
      },
      {
        nombre: 'cortina',
        image: '/media/ofertas/cortina.png',
        precio: 69990,
        descuento: 17
      },
    ]
  }

  const Produc = {
    silla: {
      image: '/media/ofertas/cortina.png',
      precio: 69990,
      descuento: 17
    },
    microfono: {
      image: '/media/ofertas/microfono.png',
      precio: 74990,
      descuento: 25
    },
    afeitar: {
      image: '/media/ofertas/afeitar.png',
      precio: 134950,
      descuento: 50
    },
    ropero: {
      image: '/media/ofertas/ropero.png',
      precio: 149900,
      descuento: 30
    },
    cortina: {
      image: '/media/ofertas/cortina.png',
      precio: 69990,
      descuento: 17
    },

  }

  export {Produc};

  export {data};