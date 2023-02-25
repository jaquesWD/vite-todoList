import App from './App.vue'
import pinia from '@/store'
import router from '@/router'
import { createApp } from 'vue'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
