import { getNavData,getSwiperData,getGoodsData } from '../../../api/index/index'

export default{
    namespaced: true,
    state: {
        navs: [],
        swipers: [],
        goods: []
    },
    mutations: {
        // 导航
        ['SET_NAVS'](state,payload){
            state.navs = payload.navs
        },
        // 轮播
        ['GET_SWIPER'](state,payload){
            state.swipers= payload.swipers
            // console.log(state.swipers)
        },
        ['GET_GOODS'](state,payload){
            state.goods = payload.goods
        }
    },
    actions: {
        // 导航
        getNavs(conText,payload){
            getNavData().then(res => {
                // console.log(res)
                if(res.code===200){
                    conText.commit('SET_NAVS',{navs:res.data})
                    if(payload.success){
                        payload.success()
                    }
                }
            })
        },
        // 轮播图
        getSwiper(conText,payload){
            getSwiperData().then(res =>{
                // console.log(res)
                if(res.code===200){
                    conText.commit('GET_SWIPER',{swipers:res.data})
                    if(payload.success){
                        payload.success()
                    }
                }
            })
        },
        // 核心产品
        getGoods(conText,payload){
            getGoodsData().then(res=>{
                conText.commit('GET_GOODS',{ goods: res.data})
            })
        },
    }
}