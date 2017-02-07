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
			<div class="heart-shape" v-bind:class="{ like: pictureList.isLike}" @click="isLike(pictureList)"></div>
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
					this.$store.dispatch('setPicAdd', address)
				}
				this.$store.dispatch('showPictureView', true)
				document.body.style.overflow = 'hidden'
			},
			isLike: function(pictureList) {
				pictureList.isLike = !pictureList.isLike
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
				width: 1.7rem;
				height: .4rem;
				// background-color: #57a97f;
				float: right;
				top: 12rem;
				border-radius: 0.2rem;
				margin-right: 1rem;
				margin-top: 0.1rem;
			}
			.comment{
				border: 0.4rem solid #57a97f
			}
			.favor {
				margin-right: 1rem;
				transition: all 0.3s;
			}
			.heart-shape{
			    top: 0;
			    width: 1rem;  
			    height: 1rem;  
			    float: right;
			    -webkit-transform: rotate(45deg);  
			    -moz-transform: rotate(45deg);  
			    -ms-transform: rotate(45deg);  
			    -o-transform: rotate(45deg);  
			    transform: rotate(45deg);  
			    background-color: inherit; 
			    margin-top: 0.3rem; 
			    margin-right: 2rem;
			    transition: 0.5s;
			    background-color: #aeaeae;
			}  
			.heart-shape:before,  
			.heart-shape:after{  
			    position: absolute;  
			    width: 1rem;  
			    height: 1rem;  
			    content: '';  
			    -webkit-border-radius: 50%;  
			    -moz-border-radius: 50%;  
			    -o-border-radius: 50%;  
			    border-radius: 50%;  
			    background-color: inherit;  
			}  
			.heart-shape:before{  
			    // bottombottom: 0px;  
			    left: -0.45rem;  
			}  
			.heart-shape:after{  
			    top: -0.4rem;  
			    // rightright: 0px;  
			}  
			.like {
				background-color: #d75858;
			}
		}
	}
</style>