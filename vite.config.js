import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['heads7.png', 'robots.txt'],
      manifest: {
        name: 'Claw Flip',
        short_name: 'ClawFlip',
        start_url: '/',
        display: 'standalone',
        background_color: '#f16565',
        theme_color: '#f16565',
        icons: [
          {
            src: 'heads7.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'heads7.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})