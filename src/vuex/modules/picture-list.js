import Vue from 'vue'
import * as types from '../mutation-types'

export default {
	state: {
		userName: 'Wade',
		topPictureDesc: 'Hello World!',
		pictureItemList: [
			{
				name: 'one',
				src: '../../static/FONT.jpg',
				pictureAdd: '../../static/FONT.jpg',
				isLike: true,
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
				isLike: true,
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
				isLike: false,
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
				isLike: true,
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
			
		]
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
		}
	},
	mutations: {
		
	},
	actions: {
		
	}
}