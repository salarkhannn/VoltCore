import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Tailwind CSS should be wired through PostCSS (postcss.config.cjs).
// Do not add `tailwindcss()` here — that caused a runtime error.
export default defineConfig({
  plugins: [react()],
})
