<template>
<transition name="view-fade">
	<div class="picture-view" v-on:click="closePictureView">
		<img class="view-picture":src="pictureViewAdd" v-autosize>
	</div>
</transition>
</template>
<script>
	export default {
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
				console.log('sss')
			})
			pictureView.addEventListener('touchend', function(e) {
				e.stopPropagation()
			})
		}
	}
</script>
<style lang="scss">
	
	.view-fade-enter ,.view-fade-leave-active{
		transform: translateY(100%);
		opacity: 0;
	}
	.view-fade-enter-active ,.view-fade-leave-active{
		transition: all .3s ease-out;
	}
	.picture-view {
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: #000;
		position: fixed;
		top: 0;
		z-index: 9999;
		.view-picture {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate3d(-50%,-50%,0);
		}
	}
</style>