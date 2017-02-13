import Vue from 'vue'
import * as types from '../mutation-types'

export default {
	state: {
		followList: [{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: 'hello world!',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: 'hello world!',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: 'hello world!',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: 'hello world!',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: 'hello world!',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: 'hello world!',
			followNumber: 200000
		},{
			name: 'Wade',
			src: '../../static/104683.jpg',
			desc: 'hello world!',
			followNumber: 200000
		}]
	},
	getters: {
		followList: state => {
			return state.followList
		},
	},
	mutations: {

	},
	actions: {

	}
}