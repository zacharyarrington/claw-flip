import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// main.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.error('SW registration failed:', err))
  }
  


createApp(App).mount('#app')
