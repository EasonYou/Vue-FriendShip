import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'

export default {
	state: {
		data: {

		}
	},
	getters: {
		profileData: state => {
			return state.data
		},
	},
	mutations: {
		GET_PROFILE_DATA (state, data) {
			state.data = data
		}
	},
	actions: {
		getProfileData (contex, name) {
			let mutation = contex
			let url
			if(name) {
				url = '/profile/' + name
			} else {
				url = 'myinformation'
			}
			contex.dispatch('changeLoadingStatus', true)
			setTimeout(function() {
				axios.get(url)
				.then(function (response) {
					contex.dispatch('changeLoadingStatus', false)
					mutation.commit(types.GET_PROFILE_DATA, response.data)
				})
				.catch(function (error) {
					console.log(error);
				});
			},1000)
			
		},
		submit (contex, vue) {
			vue.leaveWordBinding = ''
			contex.dispatch('closeLeaveWordStatus', false)
			contex.dispatch('changeLeavewordsToast', true)
		}
	}
}