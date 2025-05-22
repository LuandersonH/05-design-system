/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/05-design-system/',
  build: {
    manifest: true,
    assetsDir: 'assets',
  },
})
