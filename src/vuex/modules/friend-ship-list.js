import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'
import querystring from 'querystring';

export default {
	state: {
		data: {

		}
	},
	getters: {
		pictureList: state => {
			return state.data.pictureItemList
		},
		userName: state => {
			return state.data.userName
		},
		topPictureDesc: state => {
			return state.data.topPictureDesc
		},
		topPictureAddress: state => {
			return state.data.topPictureAddress
		},
		sideBarPicture: state => {
			return state.data.sideBarPicture
		}
	},
	mutations: {
		GET_FRIENDSHIP_LIST (state, list) {
			state.data = list
		}
	},
	actions: {
		getFriendShipList (contex) {
			let mutation = contex
			axios.get('/friendsShipList')
				.then(function (response) {
				console.log(response.data)
				mutation.commit(types.GET_FRIENDSHIP_LIST, response.data)
			})
			.catch(function (error) {
				console.log(error);
			});
			// axios.post('http://myishu.top/yishu/home/yijie/essay/action/list_attention_essay',querystring.stringify({
			// 	token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7'
			// }))
			// .then(function (response) {
			// 	console.log(response.data.data)
			// 	mutation.commit(types.GET_FRIENDSHIP_LIST, response.data.data)
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });
		}
	}
}