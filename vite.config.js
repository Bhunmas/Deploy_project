import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/MilkTea/',
  server: {
    // watch: {
    //  usePolling: true,
    // },
    // host: "0.0.0.0", // Here
    // port:10000
    // strictPort: true,
 
  }

})
