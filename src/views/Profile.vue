<template>
	<div id="profile" class="container">
		<Navs navDesc="Profile"></Navs>
		<div class="profile-container">
			<TopPicture :topPictureAddress="'../../static/FONT.jpg'">
				<span class="slot-span">dsada</span>
			</TopPicture>
			<Avadar :avdarAdress="profileData.avadarAdress" :avadarName="profileData.name"></Avadar>
		</div>
		<div class="picture-list clearfix">
			<PictureLayer v-for="pictureAddress in profileData.pictureList" :pictureAddress="pictureAddress"></PictureLayer>
		</div>
	</div>
</template>
<script>
	import Navs from '../components/Navs'
	import TopPicture from '../components/TopPicture'
	import PictureLayer from '../components/PictureLayer'
	import Avadar from '../components/Avadar'
	export default {
		components: {
			Navs,
			TopPicture,
			PictureLayer,
			Avadar
		},
		computed: {
			profileData: function() {
				return this.$store.getters.profileData
			}
		},
		destroyed: function() {
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		}
	}
</script>
<style lang="scss">
	.container {
		width: 100%;
		.profile-container {
			margin-top: 4rem;
			position: relative;
			#top-item {
				.slot-span {
					position: absolute;
					top: 0;
				}
			}
			.avadar-container {
				position: absolute;
				bottom: -4rem;
			}
		}
		.picture-list {
			margin-top: 4rem;
			.photo-thumbnail {
				width: 32%;
				height: 10rem;
				position: relative;
				img {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%)
				}
			}
		}
	}
</style>