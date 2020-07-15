import Vue from 'vue'
import { getClassifyData } from '../../../api/goods'

export default {
    namespaced: true,
    state: {
        goods:[]
    },
    mutations: {
        ['SET_CLASSTIFY'](state,payload){
            // console.log(payload)
            state.goods = payload.goods
        },
        ['SELECT_ITEM'](state,payload){
            // console.log(payload.index)
            
        
            if(state.goods.length>0){
                for(let i=0;i<state.goods.length;i++){
                    if(state.goods[i].active){
                        state.goods[i].active=false
                        break
                    }
                }
                state.goods[payload.index].active=true
                // 改变数组中数据 页面无法响应式 
                // 原数据 改变的下标 改变的值
                Vue.set(state.goods, payload.index, state.goods[payload.index])
            }
            
        }
    },
    actions: {
        getClassify(conText,payload){
            getClassifyData().then(res=>{
                // console.log(res)
                if(res.code === 200){
                    // 循环数据添加 active
                    for(let i=0;i<res.data.length;i++){
                        res.data[i].active = false
                    }
                    // console.log(res.data)
                    conText.commit('SET_CLASSTIFY',{ goods: res.data})
                    if(payload.success){
                        payload.success()
                    }
                }
            })
        }
    }
}