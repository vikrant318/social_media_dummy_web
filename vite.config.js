import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Social-media-dummy-app/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Allow access from network
    open: true, // Open the browser on server start
     // You can add more server options here if needed
     // For example, to enable CORS:
     // cors: true,
      // Or to set up a proxy:
      // proxy: {
      //   '/api': 'http://localhost:5000',
      // },
     // You can change this to any port you prefer
  },
})
