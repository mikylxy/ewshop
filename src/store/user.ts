import {defineStore} from "pinia";
import {login,user} from "@/api/auth";

//定义state中的数据类型
interface IUserInfo {
    token: string,
    username: string,
    avatar_url: string,
    permissions: string[],
    info: any,
}

export const useUserStore = defineStore({
    id: 'app-user',
    state:() :IUserInfo => ({
        token: localStorage.getItem('token') ||'',//在页面刷新时已经保留token
        username:'',
        avatar_url:'',
        permissions:[],
        info:{},
    }),
    //接收
    getters:{
        getToken(): string{
            return this.token
        },
        getUserName(): string{
            return this.username
        },
        getAvatar() :string{
            return this.avatar_url
        },
        getPermissions(): string[]{
            return this.permissions
        },
    },
    actions:{
        setToken(token: string){
            //在本地存储中存储token
            localStorage.setItem('token',token)
            this.token = token
        },
        setUserName(username: string){
            this.username = username
        },
        setAvatar(avatar_url: string){
            this.avatar_url = avatar_url
        },
        setPermissions(permissions: string[]){
            this.permissions = permissions
        },
        setInfo(info: object){
            this.info = info
        },
        //异步登录
        async login(useInfo: object){
            try {
                const response:any = await login(useInfo)
                if(response.access_token){
                    this.setToken(response.access_token)
                    return await this.getUser()
                }
            } catch (error){

            }
        },
        async getUser(){
            try {
                const response:any = await user()
                this.setInfo(response)
                this.setAvatar(response.avatar_url)
                this.setUserName(response.name)
                return response
            }catch (error){

            }
        },
    },
})