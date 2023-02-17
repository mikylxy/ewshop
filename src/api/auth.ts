import request from "@/utils/request";
import {data} from "autoprefixer";

export function login(data: object) {
    return request({
        url: '/api/auth/login',
        method:'post',
        data
    })
}
//用户接口 登录信息
export function user() {
    return request({
        url:'/api/admin/user',
    })
}