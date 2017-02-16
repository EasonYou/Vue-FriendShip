import Vuex from 'vuex'
import Vue from 'vue'

import animation from './modules/animation'
import friendShipList from './modules/friend-ship-list'
import profileData from './modules/profile-data'
import followList from './modules/follow-list'
import allList from './modules/all-list'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		animation,
		friendShipList,
		profileData,
		followList,
		allList
	}
})
