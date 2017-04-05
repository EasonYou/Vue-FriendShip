import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'
import querystring from 'querystring'

export default {
	state: {
		data: {
			followList:[]
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
		},
		CHANGE_FOLLOW_LIST_ATTENTION (state, data) {
			let list = state.data.followList
			list.find(function(x) {
				if(x.id == data.id) {
					x.isAttention = data.type
				}
			})
		},
		CLEAR_FOLLOW_LIST (state) {
			state.data.followList = []
		}
	},
	actions: {
		clearFollowList (contex) {
			contex.commit(types.CLEAR_FOLLOW_LIST)
		},
		getFollowList (contex, data) {
			let url
			data.vue.loadingStatus = true
			if(data.type) {
				url = 'http://myishu.top/yishu/home/user/action/find_user'
			} else {
				url = 'http://myishu.top/yishu/home/friend/action/list_attention'
			}
			setTimeout(function() {
				axios.post(url, querystring.stringify({
					token: localStorage.FS_token,
					keyword: data.keyword || '',
					page: 1
				}))
				.then(function(response) {
					console.log(response.data.data.list)
					let list = response.data.data.list || []
					contex.commit(types.GET_FOLLOW_LIST, list)
					console.log(response,'res')
					data.vue.loadingStatus = false
				})
				.catch(function(error) {
					console.log(error);
				});
			}, 500)
		},
		followListFollow (contex, data) {
			let url
			if(data.type) {
				url = 'http://myishu.top/yishu/home/friend/action/pay_attention'
			} else {
				url = 'http://myishu.top/yishu/home/friend/action/del_attention'
			}
			axios.post(url, querystring.stringify({
				token: localStorage.FS_token,
				friend_id: data.id
			}))
			.then(function (response) {
				data.vue.$toast(data.text)
				contex.commit('CHANGE_FOLLOW_LIST_ATTENTION', {
					id: data.id,
					type: data.type
				})
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
}