// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './views/Home'
import Detail from './views/Detail'
import Personal from './views/Personal'


import vueRouter from 'vue-router'
import vueTap from 'v-tap'

import store from './vuex'

Vue.use(vueTap)
Vue.use(vueRouter)

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

const routes = [{
	path: '/',
	component: Home
},{
	path: '/home',
	component: Home
},
{
	path: '/detail',
	component: Detail
},{
	path: '/personal',
	component: Personal
}]

const router = new vueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
