import Vue from 'vue'
import * as types from '../mutation-types'
import axios from 'axios'
import querystring from 'querystring'

export default {
	state: {
		delComment: {},
		data: {
			pictureItemList: []
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
		},
		delComment: state => {
			return state.delComment
		},
		userId: state => {
			return state.data.userId
		}
	},
	mutations: {
		GET_FRIENDSHIP_LIST (state, list) {
			state.data = list
		},
		CLEAR_FRIENDSHIP_LIST (state, list) {
			state.data.pictureItemList = []
		},
		STORE_DEL_COMMENT (state, obj) {
			state.delComment = obj
		},
		DELET_COMMENT (state, obj) {
			state.delComment.comments = state.delComment.comments.splice(obj.index, 1)
		}
	},
	actions: {
		getFriendShipList (contex, vue) {
			let num
			if(vue) {
				num = vue.fsPageNum
			} else {
				num = 1
			} 
			contex.commit(types.CLEAR_FRIENDSHIP_LIST)
			setTimeout(function() {
				axios.post('http://myishu.top/yishu/home/yijie/essay/action/list_attention_essay', querystring.stringify({
					token: localStorage.FS_token,
				 	page: num
				}))
				.then(function (response) {
					contex.commit(types.GET_FRIENDSHIP_LIST, response.data.data)
					contex.commit(types.CHANGE_FS_TOTAL_PAGE,Math.floor(response.data.data.page.total/response.data.data.page.per_page) + 1)
				})
				.catch(function (error) {
					console.log(error);
				});
			}, 1000)
		},
		changeLike (contex, list) {
			axios.post('http://myishu.top/yishu/home/yijie/votes/action/click_like', querystring.stringify({
				token: localStorage.FS_token,
				essay_id: list.essay_id
			}))
			.then(function (response) {
				list.isLike = !list.isLike
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		submitComment (contex, data) {
			console.log(data)
			let params = data.params
			axios.post('http://myishu.top/yishu/home/yijie/comment/action/publish_comment',querystring.stringify({
				token: localStorage.FS_token,
				essay_id: params.essayId,
				message: params.text,
				receive_id: params.receiveId,
				type: params.type,
			}))
			.then(function (response) {
				data.replyMessage.push(data.params)
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		storeDelComment (context, obj) {
			context.commit(types.STORE_DEL_COMMENT, obj)
		},
		deleteComment (context) {
			console.log(context)
			
			axios.post('http://myishu.top/yishu/home/yijie/comment/action/del_comment',querystring.stringify({
				token: localStorage.FS_token,
				comment_id: context.getters.delComment.id
			}))
			.then(function (response) {
				console.log('what')
				context.commit(types.DELET_COMMENT, context.getters.delComment)
			})
			.catch(function (error) {
				console.log(error);
			});
		},
	}
}