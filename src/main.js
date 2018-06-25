// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

// import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import Vuetify from 'vuetify'
Vue.use(Vuetify)

Vue.prototype.$http = axios

// 1. 开启debug模式
Vue.config.debug = true


import routes from './router'
const router = new VueRouter({
  mode: 'hash',   // 强制使用hash模式进行导航，不能指望服务器支持history
  routes: routes  // （缩写）相当于 routes: routes
})

import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>'
})
