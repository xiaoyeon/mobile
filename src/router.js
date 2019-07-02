import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//引用路由
import ShoppingCar from './views/ShoppingCar.vue'
import Community from './views/Community.vue'
import Mine from './views/Mine.vue'
import Sort from './views/Sort.vue'
import Login from './views/Login.vue'
import Register from './views/Regiter.vue'
import GoodsDetail from './views/GoodsDetail.vue'

Vue.use(Router)

//vant 插件
import { Button } from 'vant';

Vue.use(Button);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //首页
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    //登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //购物车
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: ShoppingCar
    },
    //社区
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    //我的个人中心
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    //分类页
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    //详情页面
    {
      path:'/goodsdetail',
      name:'goodsdetail',
      component:GoodsDetail
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
       //组件懒加载,或者叫按需加载
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
