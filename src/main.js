import { createApp } from 'vue'
import axios from 'axios'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import initAxiosConfig from '@/api/interceptor'
import './assets/main.css'

// 初始化axios配置
initAxiosConfig(axios)

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
