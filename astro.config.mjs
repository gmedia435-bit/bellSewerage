import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const scratchDir = 'C:/Users/USER/.gemini/antigravity/brain/2fc0237d-7af7-49d4-ae07-e8745b2d4d31/scratch';

// https://astro.build/config
export default defineConfig({
  cacheDir: `${scratchDir}/astro-cache`,
  outDir: './dist',
  vite: {
    plugins: [tailwindcss()],
    cacheDir: `${scratchDir}/vite-cache`,
  },
});
