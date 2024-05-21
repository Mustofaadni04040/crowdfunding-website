/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#30981D',
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
