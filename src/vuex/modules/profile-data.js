import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'
import querystring from 'querystring'

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
		},
		CHANGE_PROFILE_ATTENTION (state, data) {
			state.data.isAttention = data
		}
	},
	actions: {
		getProfileData (contex, vue) {
			vue.loadingStatus = true
			setTimeout(function(){
				axios.post('http://myishu.top/yishu/home/user/action/get_user_homepage', querystring.stringify({
					token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
					id: vue.$route.params.id || contex.getters.userId
				}))
				.then(function (response) {
					console.log(response)
					contex.dispatch('changeLoadingStatus', false)
					contex.commit(types.GET_PROFILE_DATA, response.data.data)
					vue.loadingStatus = false
				})
				.catch(function (error) {
					console.log(error);
				});
			}, 500)
		},
		submit (contex, data) {
			axios.post('http://myishu.top/yishu/home/yishu/message/action/publish_message', querystring.stringify({
				token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
				receive_id: data.receive,
				message: data.message
			}))
			.then(function (response) {
				data.vue.leaveWordBinding = ''
				contex.dispatch('closeLeaveWordStatus', false)
				data.vue.$toast('留言成功')
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		profileAttention (contex, data) {
			let url
			console.log(data.type)
			if(data.type) {
				url = 'http://myishu.top/yishu/home/friend/action/pay_attention'
			} else {
				url = 'http://myishu.top/yishu/home/friend/action/del_attention'
			}
			axios.post(url, querystring.stringify({
				token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
				friend_id: data.id
			}))
			.then(function (response) {
				data.vue.$toast(data.text)
				contex.commit('CHANGE_PROFILE_ATTENTION', data.type)
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
}