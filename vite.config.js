import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/MilkTea/',
  preview: {
    port: 8010,
    strictPort: true,
  },
   server: {
    port: 8010,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8010",
   },

})
