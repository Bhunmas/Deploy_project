import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  server: {
    // watch: {
    //  usePolling: true,
    // },
    host: true, // Here
    port:5000
    // strictPort: true,
 
  }

})
