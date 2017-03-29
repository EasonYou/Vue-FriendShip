import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'
import querystring from 'querystring'

export default {
	state: {
		data: {
			pictureItemList: []
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
		},
		CLEAR_FRIENDSHIP_LIST (state, list) {
			state.data.pictureItemList = []
		}
	},
	actions: {
		getFriendShipList (contex, vue) {
			let num
			if(vue) {
				num = vue.fsPageNum
			} else {
				num = 1
			} 
			contex.commit(types.CLEAR_FRIENDSHIP_LIST)
			// setTimeout(function() {

			// axios.post('/friendsShipList')
			// 	.then(function (response) {
			// 	contex.commit(types.GET_FRIENDSHIP_LIST, response.data)
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });
			// }, 1000)
			setTimeout(function() {
				axios.post('http://myishu.top/yishu/home/yijie/essay/action/list_attention_essay', querystring.stringify({
					token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
				 	page: num
				}))
				.then(function (response) {
					contex.commit(types.GET_FRIENDSHIP_LIST, response.data.data)
					contex.commit(types.CHANGE_FS_TOTAL_PAGE,Math.floor(response.data.data.page.total/response.data.data.page.per_page) + 1)
				})
				.catch(function (error) {
					console.log(error);
				});
			}, 1000)
		},
		changeLike (contex, list) {
			axios.post('http://myishu.top/yishu/home/yijie/votes/action/click_like', querystring.stringify({
				token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
				essay_id: list.essay_id
			}))
			.then(function (response) {
				list.isLike = !list.isLike
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		submitComment (contex, data) {
			console.log(data)
			let params = data.params
			axios.post('http://myishu.top/yishu/home/yijie/comment/action/publish_comment',querystring.stringify({
				token: 'Q5lEibz4Zdy0mOPABx9Dxj084aexCc4kZozaAPl1dZs+Ux6I1f3tHQ0w7/HGY7PNoou617fV7GlI4YI/xQNkTt8l0iHEwPWWppQtYtdSkxHOOCseECat5ycg6xdm9rZ7',
				essay_id: params.essayId,
				message: params.text,
				receive_id: params.receiveId,
				type: params.type,
			}))
			.then(function (response) {
				data.replyMessage.push(data.params)
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
}