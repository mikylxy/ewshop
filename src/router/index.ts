import { createRouter,createWebHistory } from "vue-router";
//在tsconfig.json添加完baseUrl和path后，在这里就可以用别名了
import Home from '@/views/Home.vue'
import Login from  '@/views/login/index.vue'
import {login} from "@/api/auth";
import Dashboard from '@/views/dashboard/Dashboard.vue'


// 2. 定义一些路由
const routes = [
    { path: '/', component: Home },
    { path: '/login',name: 'login', component: Login},
    { path: '/dashboard',name: 'dashboard', component: Dashboard}
]
// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHistory(),
    routes,
})
//配置前置守卫
router.beforeEach((to,from,next)=>{
    if (to.name!='login'){
        //如果不是登陆页面，判断是否登录
        if (!localStorage.getItem('token')){
            next({
                path:'/login'
            })
        }
    }
    next()
})

export default router