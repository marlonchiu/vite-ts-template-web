import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 服务项配置
  server: {
    host: 'localhost',
    port: 8369,
    https: false,
    open: false,
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
})
