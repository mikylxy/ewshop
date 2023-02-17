import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import '@/styles/tailwind.css'
import '@/styles/index.css'
//导入pinia
import { createPinia } from 'pinia'

//创建实例
const pinia = createPinia()

const app = createApp(App)
//使用
app.use(router).use(pinia)
app.mount('#app')
