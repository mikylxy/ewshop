//引入axios依赖包
import axios from "axios";
//axios创建对象
const request = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/',
    timeout: 5000,
})
const win:any = window;
//设置请求拦截器
request.interceptors.request.use((config):any => {
    //获取token
    const token = localStorage.getItem('token')
    //判断是否有token
    if(token){
        //如果存在，把token添加到请求头中
        config.headers!.Authorization = `Bearer ${token}`
    }
    return config
},(error) => {
    return Promise.reject(error)
})
//设置响应拦截器
request.interceptors.response.use((response) => {
    //响应回来的数据操作
    return response.data
},(error)=>{
    const {response} = error;
    //报错的时候抛出错误信息
    switch (response.status){
        case 401:
            win.$message.error('登录失败，请重新登录');
            localStorage.removeItem('token')
            setTimeout(()=>{
                window.location.href = '/login'
            },500)
            break;
        case 404:
            win.$message.error('接口不存在');
            break;
        case 500:
        case 502:
            win.$message.error('网络异常')
            break;
        case 422: {
            const msg = response.data.error[Object.keys(response.data.error)[0]][0]
            win.$message.error(msg)
            break;
        }
    }
    return Promise.reject(error)
})
//抛出对象的信息
export default request
