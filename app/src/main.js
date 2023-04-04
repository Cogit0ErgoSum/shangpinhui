import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Pagenation from '@/components/Pagenation'
import store from '@/store'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagenation.name, Pagenation)

import "@/mock/mockServe"
import "swiper/css/swiper.css"
import { reqGetSearchInfo } from './api'
console.log(reqGetSearchInfo());

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  beforeCreate() {
    Vue.prototype.$bus = this;
  },

  router,
  store
}).$mount('#app')
