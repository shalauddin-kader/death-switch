import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    require('@tailwindcss/postcss') // ✅ Add this
  ],
};

export default config;
