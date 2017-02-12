<template>
	<div class="picture-view" v-on:click="closePictureView" v-bind:class="{'picture-view-show': show}">
		<img class="view-picture":src="pictureViewAdd">
	</div>
</template>
<script>
	export default {
		props: ['show'],
		methods: {
			closePictureView: function() {
				this.$store.dispatch('showPictureView', false)
				document.body.style.overflow = 'auto'
			}
		},
		computed: {
			pictureViewAdd: function() {
				return this.$store.getters.pictureViewAdd
			}
		},
		mounted: function() {
			let pictureView = document.getElementsByClassName('picture-view')[0]
			pictureView.addEventListener('touchstar', function(e) {
				e.stopPropagation()
			})
			pictureView.addEventListener('touchend', function(e) {
				e.stopPropagation()
			})
		}
	}
</script>
<style lang="scss">
	.picture-view {
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: #000;
		position: fixed;
		top: 0;
		z-index: 9999;
		transition: all .3s ease-out;
		transform: translateY(100%);
		opacity: 0;
		.view-picture {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate3d(-50%,-50%,0);
			width: 100%;
		}
	}

	.picture-view-show {
		opacity: 1;
		transform: translateY(0);
	}
</style>