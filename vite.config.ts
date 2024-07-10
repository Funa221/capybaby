import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
    base: './',  // 使所有資源相對於當前目錄
    build: {
      outDir: 'dist',  // 打包輸出的目錄
    },
})



