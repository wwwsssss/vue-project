// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import VueSwiper from 'vue-awesome-swiper'
import 'assets/style/iconfont/iconfont.css'
import VueResource from 'vue-resource'

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
