/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'inter-regular' : ['Inter-Regular'],
        anton : ["Anton", 'sans-serif'],
      archivo: ["'Archivo Black'"]
      }
    },
  },
  plugins: [],
};
