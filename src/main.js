// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './views/Home'
import LeaveWords from './views/LeaveWords'
import Profile from './views/Profile'


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

Vue.directive('autosize', {
  inserted: function (el) {
    let height = parseInt(getComputedStyle(el,null).height)
    let width = parseInt(getComputedStyle(el,null).width)
    let pictureScale = height/width;
    let screenScale = window.screen.height / window.screen.width
    if(screenScale >= pictureScale) {
      el.style.width = '100%'
    } else {
      el.style.height = '100%'
    }
    
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
	path: '/leavewords',
	component: LeaveWords
},{
	path: '/profile',
	component: Profile
}]

const router = new vueRouter({
  routes
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
