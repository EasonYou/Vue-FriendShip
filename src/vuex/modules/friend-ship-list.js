import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'

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
				mutation.commit(types.GET_FRIENDSHIP_LIST, response.data)
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
}