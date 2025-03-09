import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindPostcss from '@tailwindcss/postcss';

const config = {
  plugins: [
    tailwindcss,
    tailwindPostcss,
    autoprefixer,
  ],
};

export default config;
