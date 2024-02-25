/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'my-lib',
      fileName: 'my-lib',
    },
  },
  plugins: [dts(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
		setupFiles: './test/setup.ts', // debe crease el archivo de configuración
  },
});