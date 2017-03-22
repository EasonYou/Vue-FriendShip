import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'
import querystring from 'querystring'

export default {
	state: {
		data: {
			followList:{}
		}
	},
	getters: {
		followList: state => {
			return state.data.followList
		},
	},
	mutations: {
		GET_FOLLOW_LIST (state, list) {
			state.data.followList = list
			console.log(state.data.followList)
		}
	},
	actions: {
		getFollowList (contex, vue) {
			let mutation = contex
			vue.loadingStatus = true
			console.log(vue.loadingStatus)
			// setTimeout(function() {
			// 	axios.get('/followlist/' + name)
			// 		.then(function(response) {
			// 			mutation.commit(types.GET_FOLLOW_LIST, response.data)
			// 			contex.dispatch('changeLoadingStatus', false)
			// 		})
			// 		.catch(function(error) {
			// 			console.log(error);
			// 		});
			// }, 1000)
			setTimeout(function() {

			axios.post('http://myishu.top/yishu/home/friend/action/list_attention', querystring.stringify({
				token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
				keyword: '',
				page: 1
			}))
			.then(function(response) {
				console.log(response.data.data.list)
				contex.commit(types.GET_FOLLOW_LIST, response.data.data.list)
				console.log(response,'res')
				// contex.dispatch('changeLoadingStatus', false)
				vue.loadingStatus = false
			})
			.catch(function(error) {
				console.log(error);
			});
			}, 500)
			
		}
	}
}