<template>
	<div class="photo-thumbnail" v-on:click="showPictureView">
		<img :src="pictureAddress" alt="">
	</div>
</template>
<script>
	export default {
		props: ['pictureAddress'],
		methods: {		
			showPictureView: function(e) {
				let address
				if (e.target.tagName === "IMG") {
					address = e.target.getAttribute('src')
				} else {
					address = e.target.getElementsByTagName('img')[0].getAttribute('src')
				}
				this.$store.dispatch('setPicAdd', address)
				this.$store.dispatch('showPictureView', true)
			}
		}
	}
</script>
<style lang="scss">
	.photo-thumbnail {
	width: 11rem;
	float: left;
	overflow: hidden;
	img {
		width: 80%;
		padding: 4%;
		border: 1px solid #efefef;
		max-height: 92%;
		// margin-left: 0.5rem;
		// margin-top: 0.5rem;
		box-shadow: 0 0 1rem rgba(0,0,0,0.1);
	}
}
</style>