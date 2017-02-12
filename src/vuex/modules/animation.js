import Vue from 'vue'
import * as types from '../mutation-types'

export default {
	state: {
		sideShow: false,
		sendBlock:false,
		sideList: [
			{
				desc: '衣述',
				link: 'home',
				title: 'Vue-FriendShip'
			}, {
				desc: '衣界',
				link: 'profile',
				title: 'Profile'
			}, {
				desc: 'Dwyane Wade',
				link: 'leavewords',
				title: 'Anything'
			}
		],
		replyUser:'sss',
		fadeDirection: 'right-to-left-fade',
		pictureView: false,
		pictureViewAdd: 'sss',
		delAlertStatus: false,
		replyMessage: '',
		profileToast: false,
		leaveWordStatus: false,
		textareaToast: false,
		navShow: true,
		scrollRecord: {
			home: 0,
			profile: 0,
			leavewords: 0
		}
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
		},
		pictureView: state => {
			return state.pictureView
		},
		pictureViewAdd: state => {
			return state.pictureViewAdd
		},
		delAlertStatus: state => {
			return state.delAlertStatus
		},
		replyMessage: state =>{
			return state.replyMessage
		},
		profileToast: state => {
			return state.profileToast
		},
		leaveWordStatus: state => {
			return state.leaveWordStatus
		},
		textareaToast: state => {
			return state.textareaToast
		},
		scrollRecord: state => {
			return state.scrollRecord
		},
		navShow: state => {
			return state.navShow
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
	  	},
	  	SHOW_PICTURE_VIEW (state, type) {
	  		state.pictureView = type
	  	},
	  	SET_PIC_ADD (state, add) {
	  		state.pictureViewAdd = add
	  	},
	  	DEL_ALERT (state, status) {
	  		state.delAlertStatus = status
	  	},
		STORE_DEL_COMMENT (state, obj) {
			state.delComment = obj
		},
		DELET_COMMENT (state) {
			let index = state.delComment.index
			state.delComment.comments.splice(index,1)
		},
		REPLY_MESSAGE (state, message) {
			state.replyMessage = message
		},
		CHANGE_PROFILE_TOAST (state, status) {
			state.profileToast = status
		},
		CHANGE_LEAVE_WORD_STATUS (state) {
			state.leaveWordStatus = !state.leaveWordStatus
		},
		CHANGE_TEXTAREA_TOAST (state, status) {
			state.textareaToast = status
		},
		CLOSE_LEAVE_WORD_STATUS (state, status) {
			state.leaveWordStatus = status
		},
		NAV_SHOW (state) {
			state.navShow = !state.navShow
			setTimeout(function() {
				state.navShow = !state.navShow
			},200)
			
		}
	},
	actions: {
    	changeSidebar (context) {
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
	    },
	    showPictureView (context, type) {
	    	context.commit(types.SHOW_PICTURE_VIEW, type)
	    },
	    setPicAdd (context, add) {
	    	context.commit(types.SET_PIC_ADD, add)
	    },
	    changeReplyMessage (context, message) {
			context.commit(types.REPLY_MESSAGE, message)
		},
	    changeDelAlert (context, status) {
	    	context.commit(types.DEL_ALERT, status)
	    },
		storeDelComment (context, obj) {
			context.commit(types.STORE_DEL_COMMENT, obj)
		},
		deleteComment (context) {
			context.commit(types.DELET_COMMENT)
		},
		changeProfileToast (context, status) {
			context.commit(types.CHANGE_PROFILE_TOAST, status)
		},
		changeLeaveWordStatus (context, status) {
			context.commit(types.CHANGE_LEAVE_WORD_STATUS, status)
		},
		changeTextareaToast (context, status) {
			context.commit(types.CHANGE_TEXTAREA_TOAST, status)
		},
		closeLeaveWordStatus (context, status) {
			context.commit(types.CLOSE_LEAVE_WORD_STATUS, status)
		},
		navShow (context, status) {
			context.commit(types.NAV_SHOW)
		}
    }
}