import Vuex from 'vuex'
import Vue from 'vue'

import animation from './modules/animation'
import pictureList from './modules/picture-list'
import profileData from './modules/profile-data'
import followList from './modules/follow-list'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		animation,
		pictureList,
		profileData,
		followList
	}
})
