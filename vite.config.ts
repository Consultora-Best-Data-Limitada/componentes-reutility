import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 8080,
  },
  build: {
    cssCodeSplit: true,
    lib: {
      formats: ["es", "cjs"],
      name: 'ComponentesReutility',
      entry: "./src/plugin/index.ts",
      fileName: 'componentes-reutility',
    },
    rollupOptions: {
      external: [
        "vue",
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});