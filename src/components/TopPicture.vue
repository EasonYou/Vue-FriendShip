<template>
	<div id="top-item">
		<div class="top-img-cont" >
			<img :src="topPictureAddress">
		</div>
		<div class="shadow" @click="showPic"></div>
		<span>{{ topPictureDesc }}</span>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: ['topPictureDesc', 'topPictureAddress'],
		methods: {
			showPic: function(e) {
				this.$store.dispatch('setPicAdd', this.topPictureAddress)
				this.$store.dispatch('showPictureView', true)
			}
		}
	}
</script>
<style lang="scss">
	#top-item {
		width: 100%;
		height: 13rem;
		position: relative;
		overflow: hidden;
		margin-top: 4rem;
		.top-img-cont {
			width: 100%;
			height: 100%;
			position: absolute;
			img {
				width: 100%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
		.shadow {
				width: 100%;
				height: 13rem;
				top: 0;
				position: absolute;
				box-shadow: 0 -0rem 10rem black inset;
				// background-color: #fff;
		}
		span {
			color: #fff;
			position: absolute;
			bottom: 2rem;
			width: 100%;
			left: 0;
		}
	}
</style>