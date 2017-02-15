import Vue from 'vue'
import * as types from '../mutation-types'

export default {
	state: {
	},
	getters: {
		pictureList: state => {
			return state.pictureItemList
		},
		userName: state => {
			return state.userName
		},
		topPictureDesc: state => {
			return state.topPictureDesc
		},
		topPictureAddress: state => {
			return state.topPictureAddress
		},
		sideBarPicture: state => {
			return state.sideBarPicture
		}
	},
	mutations: {

	},
	actions: {

	}
}