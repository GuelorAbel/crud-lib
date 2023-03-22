/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "xs": '480px',
      "sm": '640px',
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1440px"
    }
  },
   // ajout du plugin daisyUI
   plugins: [require("daisyui")],

   // option de configuration daisyui
   daisyui: {
     styled: false,
   },
}
