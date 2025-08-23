import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
    resolve: {
    alias: {
      'Lucide-react': 'lucide-react',
      'sonner@2.0.3': 'sonner'
    }
  },

  build: { outDir: 'dist' }
})
  
