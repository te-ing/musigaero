/** @type {import('tailwindcss').Config} */
import { tailwindConfig } from './src/constants/styles';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...tailwindConfig,
      backgroundImage: {
        petPhotos: 'linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ), url("./assets/images/bg_photos.png")',
      },
    },
  },
  plugins: [],
};
