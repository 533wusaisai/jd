// 通用请求封装

import axios from 'axios'

let lazyImg = document.querySelector('.load')
export function request(url,method="get",data,config){
    lazyImg.style.display = 'block'
    return axiosRequest(url,method,data,config)
}
function axiosRequest(url,method,data,config){
    if(method.toLowerCase()==='post'){
        if(data instanceof Object){
            // 浏览器兼容 es6转es5
            let params=new URLSearchParams();
            for (let key in data){
                params.append(key, data[key]);
            }
            data = params
        }
    }else if(method.toLowerCase()==='file'){
        method = 'post'
        if(data instanceof Object){
            let params = new FormData();
            for (let key in data){
                params.append(key, data[key]);
            }
            data = params;
        }
    }
    let axiosConfig = {
        url: url,
        method: method.toLowerCase(),
        data: data
    }
    if (config instanceof Object){
        for (let key in config){
            axiosConfig[key]=config[key];
        }
    }
    return axios(axiosConfig).then(res=>{
        lazyImg.style.display = 'none'
        return res.data
    })
}