import { defineConfig } from 'vite';
import { resolve } from 'path';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/product-description.ts'),
      name: 'ProductDescription',
      formats: ['es', 'umd'],
      fileName: (format) => format === 'umd' ? 'product-description.min.js' : `product-description.${format}.js`
    },
    rollupOptions: {
      plugins: [terser()],
      output: {
        inlineDynamicImports: true
      }
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