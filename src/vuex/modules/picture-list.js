import Vue from 'vue'
import * as types from '../mutation-types'

export default {
	state: {
		userName: 'Eason',
		pictureItemList: [
			{
				name: 'one',
				src: '../../static/FONT.jpg',
				pictureAdd: '../../static/FONT.jpg',
				comment: [
					{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'James',
						receive: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					}
				]
			},{
				name: 'two',
				src: '../../static/FONT.jpg',
				pictureAdd: '../../static/FONT.jpg',
				comment: [
					{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'James',
						receive: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					}
				]
			},{
				name: 'two',
				src: '../../static/WADEpsd2.jpg',
				pictureAdd: '../../static/58447_1262335109I868.jpg',
				comment: [
					{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'James',
						receive: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					}
				]
			},{
				name: 'two',
				src: '../../static/logo.png',
				pictureAdd: '../../static/WADEpsd2.jpg',
				comment: [
					{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'James',
						receive: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						receive: 'James',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					},{
						sent: 'Wade',
						text: 'sdassa aassda ssaaa s sdassa aas sd ass aaa ssdas s aaa ssdas saaas'
					}
				]
			}
			
		],
		replyMessage: ''
	},
	getters: {
		pictureList: state => {
			return state.pictureItemList
		},
		userName: state => {
			return state.userName
		},
		replyMessage: state =>{
			return state.replyMessage
		}
	},
	mutations: {
		REPLY_MESSAGE (state, message) {
			state.replyMessage = message
		}
	},
	actions: {
		changeReplyMessage (context, message) {
			context.commit(types.REPLY_MESSAGE, message)
		}
	}
}