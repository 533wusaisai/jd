import config from '../../assets/js/conf/config'
import { request } from '../../assets/js/utils/request'

// 首页快速导航接口
export function getNavData(){
    return request(config.baseApi+'/home/index/nav?token='+config.token)
}
// 首页轮播图接口
export function getSwiperData(){
    return request(config.baseApi+"/home/index/slide?token="+config.token)
}

// 首页产品
export function getGoodsData(){
    return request(config.baseApi+"/home/index/goodsLevel?token="+config.token)
}