import Vue from 'vue'
import * as types from '../mutation-types'

export default {
	state: {
		pictureItemList: [
			{
				name: 'one',
				src: '../assets/FONT.jpg',
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
				src: '../assets/FONT.jpg',
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
				src: '../assets/FONT.jpg',
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
		}
	}
}