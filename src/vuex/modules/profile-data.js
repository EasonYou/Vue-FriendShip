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
				url = '/name/' + name
			} else {
				url = 'myinformation'
			}
			
			axios.get(url)
				.then(function (response) {
					console.log(response.data)
				mutation.commit(types.GET_PROFILE_DATA, response.data)
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
}