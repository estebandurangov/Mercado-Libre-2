/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav': '#FFF159',
        'azul': '#3483FA',
        'gradient': '#A90F90',
        'endGradient': '#0C1A51',
        'verde': '#00A650'
      }

    },
  },
  plugins: [],
}

