<template>
	<div class="photo-item clearfix">
		<router-link class="link-avadar" :to="'profile'">
			<img :src="pictureList.src">
			<span>{{ pictureList.name }}</span>
		</router-link>
		<div class="main-container clearfix">
			<span class="item-desc" >{{ pictureList.desc }}</span>
			<PictureLayer :pictureAddress="pictureList.pictureAdd"><PictureLayer>
		</div>
		<LikeandComment :pictureList="pictureList" ></LikeandComment>
		<Comment :comments="pictureList.comment"></Comment>
	</div>
</template>
<script>
	import Comment from './Comment'
	import PictureLayer from './PictureLayer'
	import LikeandComment from './LikeandComment'
	export default {
		props:['pictureList','index'],
		components:{
			Comment,
			PictureLayer,
			LikeandComment
		}
	}
</script>
<style lang="scss">
	.photo-item {
		padding-top: 1.5rem;
		text-align: left;
		border-bottom: 1px solid #efefef;
		position: relative;
		.link-avadar {
			display: inline-block;
			width: 20%;
			height: 5rem;
			overflow: hidden;
			padding-left: 0rem;
			text-align: center;
			float: left;
			position: relative;
			img {
				width: 3.2rem;
				height: 3.2rem;
				text-align: center;
				margin-left: 0.3rem;
				// position: absolute;
				// // left: 50%;
				// // transform: translateX(-50%);
				border-radius: 50%;
			}
			span {
				color: #6d6d6d;
				display: inline-block;
				width: 100%;
				text-align: center;
			}
		}
		.main-container {
			float: left;
			width: 74%;
			.item-desc {
				// float: left;
				display: block;
				width: 100%;
			}
		}
	}
</style>