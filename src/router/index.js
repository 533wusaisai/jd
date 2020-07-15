import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "hash",
    // base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: ()=>(import('../pages/home/main')),
        redirect: "/index",
        children: [{
            path: 'index',
            name: 'index',
            component: ()=>(import('../pages/home/indexs')),
            meta: {
                keepLive:true,
                title: '商城'
            }
        },
        {
            path: 'cart',
            name: 'cart',
            component: ()=>(import('../pages/home/cart')),
            meta: {
                keepLive:true,
                title: '购物车'
            }
        },
        {
            path: 'my',
            name: 'my',
            component: ()=>(import('../pages/home/ucenter')),
            meta: {
                keepLive:true,
                title: '我的'
            }
        }]
    },{
        path: '/goods/classify',
        name: 'goods-classity',
        component: ()=>import('../pages/home/goods/classify'),
        redirect: "/goods/classify/item",
        children: [
            {
                path:"item",
                name:"goods-classify-item",
                component:()=>import("../pages/home/goods/classify_item"),
                meta:{title:"商品分类"}
            }
        ]
    }]
})

router.beforeEach((to,from,next)=>{ 
    // 缓存页面
    // if(to.meta.auth){
    //     if()
    // }
    next()
})
export default router