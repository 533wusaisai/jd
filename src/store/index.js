import Vue from 'vue'
import Vuex from 'vuex'
import index from "./modules/index";
import goods from './modules/goods'
Vue.use(Vuex)
let store =new Vuex.Store ({
    modules: {
        index,
        goods
    }
})
export default store