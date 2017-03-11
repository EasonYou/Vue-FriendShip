import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'

export default {
	state: {
		data: {

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
		}
	},
	actions: {
		getAllList (contex) {
			let mutation = contex
			axios.get('/allList')
				.then(function (response) {
				mutation.commit(types.GET_ALL_LIST, response.data)
			})
			.catch(function (error) {
				console.log(error);
			});
			
		}
	}
}