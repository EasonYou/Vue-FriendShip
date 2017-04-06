<template>
	<div class="photo-item clearfix">
		<AvadarLink :name="pictureList.name" :avadarSrc="pictureList.src" :id="pictureList.id" @click="changeFollowBtn"></AvadarLink>
		<div class="main-container clearfix">
			<span class="item-desc" >{{ pictureList.desc }}</span>
			<PictureLayer :pictureAddress="pictureList.pictureAdd"><PictureLayer>
		</div>
		<LikeandComment :pictureList="pictureList" ></LikeandComment>
		<div class="like-list">
			<div class="item" v-for="data in lists" @click="likeRoute(data.id)">
				<img :src="data.picture" alt="">
			</div>
		</div>
		<Comment :pictureList="pictureList"></Comment>
	</div>
</template>
<script>
	import Comment from './Comment'
	import PictureLayer from './PictureLayer'
	import LikeandComment from './LikeandComment'
	import AvadarLink from './AvadarLink'
	export default {
		props:['pictureList','index'],
		data () {
			return {
				lists: [{
					id: 10,
					picture: 'https://myishu.top/yishu/uploads/11/20170210182654selo_small.jpg'
				}, {
					id: 10,
					picture: 'https://myishu.top/yishu/uploads/11/20170210182654selo_small.jpg'
				}, {
					id: 10,
					picture: 'https://myishu.top/yishu/uploads/11/20170210182654selo_small.jpg'
				}, {
					id: 10,
					picture: 'https://myishu.top/yishu/uploads/11/20170210182654selo_small.jpg'
				}]
			}
		},
		components:{
			Comment,
			PictureLayer,
			LikeandComment,
			AvadarLink
		},
		methods: {
			changeFollowBtn () {
				console.log(this.pictureList)
				this.$store.dispatch('changeFollowListBtn', true)
			}, 
			likeRoute (id) {
				this.$router.push({ name: 'Profile', params: { id: id }})
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
		.main-container {
			float: left;
			width: 74%;
			.item-desc {
				// float: left;
				display: block;
				width: 100%;
			}
		}
		.like-list {
			margin-left: 20%;
			width: 80%;
			display: flex;
			.item {
				width: 2rem;
				height: 2rem;
				margin-left: 0.4rem;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.item:first-child {
				margin-left: 0;
			}
		}
	}
	.photo-item:last-child {
		padding-bottom: 10rem;
	}
</style>