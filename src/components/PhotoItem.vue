<template>
	<div class="photo-item clearfix">
		<AvadarLink :name="pictureList.name" :avadarSrc="pictureList.src" :id="'wade'" @click="changeFollowBtn"></AvadarLink>
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
	import AvadarLink from './AvadarLink'
	export default {
		props:['pictureList','index'],
		components:{
			Comment,
			PictureLayer,
			LikeandComment,
			AvadarLink
		},
		methods: {
			changeFollowBtn: function() {
				this.$store.dispatch('changeFollowListBtn', true)
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
	}
	.photo-item:last-child {
		margin-bottom: 3rem;
	}
</style>