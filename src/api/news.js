import {request} from "./request";

export function getNewsdata(){
    return request({
        url:'/new'
    })
}