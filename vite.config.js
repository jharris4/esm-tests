import { defineConfig } from "vite";

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        app: 'src/index.vite.html'
      },
      output: {
        app: 'index.html'
      }
    },
    outDir: "../distVite"
  },
  plugins: [],
  optimizeDeps: {
    exclude: []
  },
  resolve: {
    alias: {
    }
  },
  server: {
    open: '/index.vite.html',
  },
});
