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
		],
		replyUser:'sss',
		fadeDirection: 'right-to-left-fade'
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
		},
		replyUser: state => {
			return state.replyUser
		},
		fadeDirection: state => {
			return state.fadeDirection
		}
	},
	mutations: {
    	CHANGE_SIDEBAR (state) {
     	 	state.sideShow = !state.sideShow
	  	},
	  	CHANGE_SEND_BLOCK (state) {
	  		state.sendBlock = !state.sendBlock
	  	},
	  	EDIT_REPLY_USER (state, userName) {
	  		state.replyUser = userName
	  	},
	  	CHANGE_DIRECTION (state, direction) {
	  		state.fadeDirection = direction
	  	}
	},
	actions: {
    	changeSide (context) {
	      	context.commit(types.CHANGE_SIDEBAR)
	    },
	    changeSendBlock (context) {
	    	context.commit(types.CHANGE_SEND_BLOCK)
	    },
	    editReplyUser (context, userName) {
	    	context.commit(types.EDIT_REPLY_USER, userName)
	    },
	    changeDirection (context, direction) {
	    	context.commit(types.CHANGE_DIRECTION, direction)
	    }
    }
}