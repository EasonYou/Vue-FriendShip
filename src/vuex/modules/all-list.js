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
		allPictureList: state => {
			return state.data.pictureItemList
		},
		allTopPictureDesc: state => {
			return state.data.topPictureDesc
		},
		allTopPictureAddress: state => {
			return state.data.topPictureAddress
		}
	},
	mutations: {
		GET_ALL_LIST (state, list) {
			state.data = list
		},
		CLEAR_ALL_LIST (state) {
			state.data.pictureItemList = []
		}
	},
	actions: {
		getAllList (contex) {
			contex.commit(types.CLEAR_ALL_LIST)
			// axios.post('/allList')
			// 	.then(function (response) {
			// 	contex.commit(types.GET_ALL_LIST, response.data)
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });
			setTimeout(function () {	
				axios.post('http://myishu.top/yishu/home/yijie/essay/action/list_square_essay',querystring.stringify({
					token: localStorage.FS_token,
				 	page: 1
				}))
				.then(function (response) {
					console.log(response.data.data)
					contex.commit(types.GET_ALL_LIST, response.data.data)
					contex.commit(types.CHANGE_FS_TOTAL_PAGE, Math.floor(response.data.data.page.total/response.data.data.page.per_page) + 1)
				})
				.catch(function (error) {
					console.log(error);
				});
			}, 1000)
		}
	}
}