import Link from "next/link";
import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="bg-nav h-[100px] debug">
        <div className="flex mx-auto justify-between w-2/3 h-full py-3">
            <div className="flex flex-col justify-between w-1/8">
            <svg
            width="134"
            height="34"
            viewBox="0 0 134 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect width="134" height="34" fill="url(#pattern0)" />
            <defs>
                <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
                >
                <use href="#image0_1_6" transform="scale(0.00746269 0.0294118)" />
                </pattern>
                <image
                id="image0_1_6"
                width="134"
                height="34"
                href="data:image/png;base64,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"
                />
            </defs>
            </svg>

            <span>Ingresa tu domicilio</span>
            </div>
            <div className="flex flex-col justify-between w-1/2">
                <input className="p-2"
                type="text"
                name="Search"
                id=""
                placeholder="Buscar productos, marcas y más…"
                />
                <ul className="space-x-4">
                <Link href="">Categorías</Link>
                <Link href="">Ofertas</Link>
                <Link href="">Historial</Link>
                <Link href="">Supermercado</Link>
                <Link href="">Moda</Link>
                <Link href="">Vender</Link>
                <Link href="">Ayuda/PQR</Link>
                </ul>
            </div>
            <div className="flex flex-col justify-end w-2/8">
                <span>Crea tu cuenta Ingresa Mis compras</span>
            </div>
            <div className="flex flex-col justify-end w-1/8">
                <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0 1.25C0 0.557292 0.557292 0 1.25 0H3.61979C4.76562 0 5.78125 0.666667 6.25521 1.66667H27.6615C29.0312 1.66667 30.0312 2.96875 29.6719 4.29167L27.5365 12.224C27.0938 13.8594 25.6094 15 23.9167 15H8.89062L9.17188 16.4844C9.28646 17.0729 9.80208 17.5 10.401 17.5H25.4167C26.1094 17.5 26.6667 18.0573 26.6667 18.75C26.6667 19.4427 26.1094 20 25.4167 20H10.401C8.59896 20 7.05208 18.7188 6.71875 16.9531L4.03125 2.83854C3.99479 2.64062 3.82292 2.5 3.61979 2.5H1.25C0.557292 2.5 0 1.94271 0 1.25ZM6.66667 24.1667C6.66667 23.8384 6.73133 23.5133 6.85697 23.21C6.9826 22.9066 7.16675 22.631 7.3989 22.3989C7.63105 22.1668 7.90664 21.9826 8.20996 21.857C8.51327 21.7313 8.83836 21.6667 9.16667 21.6667C9.49497 21.6667 9.82006 21.7313 10.1234 21.857C10.4267 21.9826 10.7023 22.1668 10.9344 22.3989C11.1666 22.631 11.3507 22.9066 11.4764 23.21C11.602 23.5133 11.6667 23.8384 11.6667 24.1667C11.6667 24.495 11.602 24.8201 11.4764 25.1234C11.3507 25.4267 11.1666 25.7023 10.9344 25.9344C10.7023 26.1666 10.4267 26.3507 10.1234 26.4764C9.82006 26.602 9.49497 26.6667 9.16667 26.6667C8.83836 26.6667 8.51327 26.602 8.20996 26.4764C7.90664 26.3507 7.63105 26.1666 7.3989 25.9344C7.16675 25.7023 6.9826 25.4267 6.85697 25.1234C6.73133 24.8201 6.66667 24.495 6.66667 24.1667ZM24.1667 21.6667C24.8297 21.6667 25.4656 21.9301 25.9344 22.3989C26.4033 22.8677 26.6667 23.5036 26.6667 24.1667C26.6667 24.8297 26.4033 25.4656 25.9344 25.9344C25.4656 26.4033 24.8297 26.6667 24.1667 26.6667C23.5036 26.6667 22.8677 26.4033 22.3989 25.9344C21.9301 25.4656 21.6667 24.8297 21.6667 24.1667C21.6667 23.5036 21.9301 22.8677 22.3989 22.3989C22.8677 21.9301 23.5036 21.6667 24.1667 21.6667Z"
                    fill="black"
                />
                </svg>
            </div>
        </div>
      
    </nav>
  );
};

export { Nav };
