import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    historyApiFallback: true, // 🔥 রিফ্রেশ করলে fallback দিবে index.html এ
  }
})



