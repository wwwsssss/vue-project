// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import VueSwiper from 'vue-awesome-swiper'
import './assets/style/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueSwiper)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
