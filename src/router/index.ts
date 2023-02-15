import { createRouter,createWebHistory } from "vue-router";
//在tsconfig.json添加完baseUrl和path后，在这里就可以用别名了
import Home from '@/views/Home.vue'
import Login from  '../views/Login.vue'

// 2. 定义一些路由
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login}
]
// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router