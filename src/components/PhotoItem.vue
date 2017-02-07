<template>
	<div class="photo-item clearfix">
		<router-link class="item-link" :to="'detail'">
			<img :src="pictureList.src">
			<span>{{ pictureList.name }}</span>
		</router-link>
		<div class="photo-thumbnail" v-on:click="showPictureView">
			<img :src="pictureList.pictureAdd" alt="">
		</div>
		<div class="oper clearfix">
			<div class="favor"></div>
			<div class="comment" v-on:click="changeSendBlock(pictureList.comment)"></div>
		</div>
		<Comment :comments="pictureList.comment"></Comment>
	</div>
</template>
<script>
	import Comment from './Comment'  
	export default {
		props:['pictureList','index'],
		components:{
			Comment
		},
		methods: {
			changeSendBlock: function(comments) {
				this.$store.dispatch('changeSendBlock')
				this.$store.dispatch('editReplyUser', '')
				this.$store.dispatch('changeReplyMessage', comments)
			},
			showPictureView: function(e) {
				if (e.target.tagName === "IMG") {
					let address = e.target.getAttribute('src')
					console.log(e.target)
					this.$store.dispatch('setPicAdd', address)
				}
				this.$store.dispatch('showPictureView', true)
				document.body.style.overflow = 'hidden'
			}
		},
		computed: {
			avadar: function() {
				return this.$store.getters.pictureList
			}
		}
	}
</script>
<style lang="scss">
	.photo-item {
		padding-top: 1.5rem;
		text-align: left;
		border-bottom: 1px solid #efefef;
		position: relative;
		.item-link {
			display: inline-block;
			width: 5rem;
			height: 5rem;
			overflow: hidden;
			padding-left: .5rem;
			text-align: center;
			float: left;
			img {
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
			}
			span {
				display: inline-block;
				width: 100%;
				text-align: center;
			}
		}
		.photo-thumbnail {
			width: 11rem;
			float: left;
			overflow: hidden;
			img {
				width: 85%;
				padding: 0.2rem;
				border: 1px solid #efefef;
				margin-left: 0.5rem;
				margin-top: 0.5rem;
			}
		}
		.oper {
			float: right;
			width: 100%;
			.favor, .comment{
				width: 1.5rem;
				height: 1.5rem;
				background-color: #57a97f;
				float: right;
				top: 12rem;
				border-radius: 50%;
				margin-right: 0.5rem;
			}
			.favor {
				margin-right: 1rem;
			}
		}
	}
</style>