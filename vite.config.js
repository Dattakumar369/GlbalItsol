import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin to copy 404.html to dist after build
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync('404.html', join('dist', '404.html'))
      }
    }
  ],
  // For custom domain, use root path. For GitHub Pages subdomain, use /nvns/
  // This will be detected at runtime in the app
  base: '/',
})

