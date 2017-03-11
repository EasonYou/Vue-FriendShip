// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './views/Home'
import FollowList from './views/FollowList'
import Profile from './views/Profile'

import store from './vuex'
import vueRouter from 'vue-router'

import axios from 'axios'
import Mock from './mock/mock.js'

Vue.prototype.$http = axios

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(vueRouter)

Vue.directive('focus', {
  inserted: function (el, value) {
    el.addEventListener('focus', function() {
      this.className += ' focus'
    })
    if(value.value === 'is immediate') {
      el.focus()
    }
    el.addEventListener('blur', function() {
      this.className = this.className.replace(' focus', '')
    })
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
	path: '/followlist/:id',
	component: FollowList
},{
	path: '/profile/:id',
	component: Profile
},{
  path: '/myinformation',
  component: Profile
}]

const router = new vueRouter({
    routes
    // mode:'history'
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
