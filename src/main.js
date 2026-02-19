import { createApp } from 'vue'
import App from './App.vue'

// Global styles — order matters
import './assets/styles/variables.css'
import './assets/styles/base.css'
import './assets/styles/animations.css'

createApp(App).mount('#app')
