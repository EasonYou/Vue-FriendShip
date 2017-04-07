<template>
	<div class="picture-view" v-on:click="closePictureView" v-bind:class="{'picture-view-show': show}">
		<img class="view-picture":src="add === '-' ? 'http://myishu.top/yishu/cover.png' : add">
		<div class="delete" @click="deletePicture" v-if="typeof pictureViewAdd === 'object' && flag">+</div>
	</div>
</template>
<script>
	export default {
		props: ['show'],
		methods: {
			closePictureView () {
				this.$store.dispatch('showPictureView', false)
				document.body.style.overflow = 'auto'
				console.log(this.$route)
			},
			deletePicture (e) {
				console.log(this.pictureViewAdd)
				this.$store.dispatch('deletePicture', {
					vue: this,
					id: this.pictureViewAdd.essay_id
				})
				e.stopPropagation()
			}
		},
		computed: {
			pictureViewAdd () {
				return this.$store.getters.pictureViewAdd
			},
			userId () {
				return this.$store.getters.userId
			},
			id () {
				return this.$route.params.id
			},
			flag () {
				return this.userId === this.id || this.$route.name === 'myinformation'
			},
			add () {
				let add = typeof this.pictureViewAdd === 'string' ? this.pictureViewAdd : this.pictureViewAdd.pictureAdd
				return add
			}
		},
		mounted () {
			
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
		z-index: 9000;
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
		.delete {
			width: 5rem;
			height: 5rem;
			position: absolute;
			bottom: 0rem;
			left: 50%;
			transform: translateX(-50%) rotate(45deg);
			color: #fff;
			z-index: 9999;
			font-size: 7rem;
			font-weight: lighter;
			text-align: center;
			line-height: 5rem;
		}
	}

	.picture-view-show {
		opacity: 1;
		transform: translateY(0);
	}
</style>