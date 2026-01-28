import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // The new v4 way

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add this here
  ],
  base: '/portfolio-2026/', // Essential for GitHub Pages
})