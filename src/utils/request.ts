//引入axios依赖包
import axios from "axios";
//axios创建对象
const request = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/',
    timeout: 5000,
})
//设置请求拦截器
request.interceptors.request.use((config) => {
    return config
},(error) => {
    return Promise.reject(error)
})
//设置响应拦截器
request.interceptors.response.use((response) => {
    //响应回来的数据操作
    return response.data
},(error)=>{
    return Promise.reject(error)
})
//抛出对象的信息
export default request
