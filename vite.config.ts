import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/product-description.ts'),
      name: 'ProductDescription',
      fileName: (format) => `product-description.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'product-description.css';
          }
          return assetInfo.name;
        },
      },
    },
    sourcemap: true,
    minify: 'terser',
  },
  server: {
    port: 5174,
    open: '/src/index.html',
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
}); 