import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'

export default {
	state: {
		data: {

		}
	},
	getters: {
		followList: state => {
			return state.data.followList
		},
	},
	mutations: {
		GET_FOLLOW_LIST (state, list) {
			state.data = list
		}
	},
	actions: {
		getFollowList (contex, name) {
			let mutation = contex
			contex.dispatch('changeLoadingStatus', true)
			setTimeout(function() {
				axios.get('/followlist/' + name)
				.then(function (response) {
				mutation.commit(types.GET_FOLLOW_LIST, response.data)
				contex.dispatch('changeLoadingStatus', false)
			})
			.catch(function (error) {
				console.log(error);
			});
		},1000)
			
		}
	}
}