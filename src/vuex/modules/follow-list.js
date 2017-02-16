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
			console.log(state)
			state.data = list
		}
	},
	actions: {
		getFollowList (contex, name) {
			let mutation = contex
			axios.get('/followlist/' + name)
				.then(function (response) {
				mutation.commit(types.GET_FOLLOW_LIST, response.data)
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
}