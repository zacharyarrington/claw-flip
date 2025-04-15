<template>
    <div v-if="showInstall">
      <button @click="installApp">Install App</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const deferredPrompt = ref(null)
  const showInstall = ref(false)
  
  onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault() // Prevent automatic browser prompt
      deferredPrompt.value = e
      showInstall.value = true
    })
  })
  
  const installApp = async () => {
    if (deferredPrompt.value) {
      deferredPrompt.value.prompt()
  
      const { outcome } = await deferredPrompt.value.userChoice
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }
  
      showInstall.value = false
      deferredPrompt.value = null
    }
  }
  </script>
  