import Vue from 'vue'
import * as types from '../mutation-types'

export default {
	state: {
		sideShow: false,
		sendBlock:false,
		sideList: [
			{
				desc: '衣述',
				link: 'home'
			}, {
				desc: '衣界',
				link: 'detail'
			}, {
				desc: 'Dwyane Wade',
				link: 'personal'
			}
		]
	},
	getters: {
		sideShow: state => {
			return state.sideShow
		},
		sideList: state => {
			return state.sideList
		},
		sendBlock: state => {
			return state.sendBlock
		}
	},
	mutations: {
    	CHANGE_SIDEBAR (state) {
     	 	state.sideShow = !state.sideShow
	  	},
	  	CHANGE_SEND_BLOCK (state) {
	  		state.sendBlock = !state.sendBlock
	  	}
	},
	actions: {
    	changeSide (context) {
	      	context.commit(types.CHANGE_SIDEBAR)
	    },
	    changeSendBlock (context) {
	    	context.commit(types.CHANGE_SEND_BLOCK)
	    }
    }
}