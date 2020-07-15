import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import utils from './assets/js/utils';


import './assets/css/common/public.css'
// 图片懒加载
Vue.prototype.$utils=utils;
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
