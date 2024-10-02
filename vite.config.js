import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve('./src/component/index.jsx'),
      name: "@landra_sistemas/react-query-assist"
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
  },
})
