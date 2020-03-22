import Vue from 'vue'
import App from './App.vue' 
import router from './router'
import store from './store'

// 使 mock 生效
import './mock/index'

// 不加路径查找方式和requier一样：先在自己文件的modules查找，没有一直向上查找，会查找到根目录下的node_modules中，可以直接去modeule中看路径
// 加上路径 是根据路径查找

// 引入swiper的css文件
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
