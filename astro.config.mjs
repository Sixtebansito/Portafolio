// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});


export default defineConfig({
  site: 'https://sixtebansito.gihub.io',
  base: '/sixtebansito.gihub.io',
});
