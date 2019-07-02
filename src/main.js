import Vue from 'vue' // 引入主类库
import App from './App.vue' // 引入根组件，层级最高的组件
import router from './router' // 引入路由配置文件
import store from './store' // 引入vuex配置文件


// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//vant 插件
import { Button } from 'vant';

Vue.use(Button);

// 使用mint-ui的组件 
import {Loadmore} from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

// 引入axios
import axios from 'axios'

// 将axios添加到Vue上,然后在组件里面使用它的时候,只需要this.$axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
