import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: "/Todolist/",
  build: {
    rollupOptions: {
      external: "src/App.css",
    },
  },
});
