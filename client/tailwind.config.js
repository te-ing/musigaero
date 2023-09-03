/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF9686',
        secondary: '#DB8EFF',
      },
      backgroundImage: {
        petPhotos: 'linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ), url("./assets/images/bg_photos.png")',
      },
    },
    fontFamily: {
      primary: 'Spoqa Han Sans Neo',
    },
  },
  plugins: [],
};
