import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig } from 'vite'

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FM-007-Order-Summary-Component/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/types': path.resolve(__dirname, './types'),
    },
  },
})
