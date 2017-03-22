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
		}
	},
	actions: {
		getProfileData (contex, vue) {
			console.log(name)
			// let mutation = contex
			// let url
			// if(name) {
			// 	url = '/profile/' + name
			// } else {
			// 	url = 'myinformation'
			// }
			// contex.dispatch('changeLoadingStatus', true)
			// setTimeout(function() {
			// 	axios.get(url)
			// 	.then(function (response) {
			// 		contex.dispatch('changeLoadingStatus', false)
			// 		mutation.commit(types.GET_PROFILE_DATA, response.data)
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});
			// },1000)
			vue.loadingStatus = true
			setTimeout(function(){

			axios.post('http://myishu.top/yishu/home/user/action/get_user_homepage', querystring.stringify({
				token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
				id: vue.$route.params.id
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
		}
	}
}