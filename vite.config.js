import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For custom domain, use root path. For GitHub Pages subdomain, use /nvns/
  // This will be detected at runtime in the app
  base: '/',
})

