import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/responsive.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
