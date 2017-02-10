<template>
	<div id="profile" class="container">
		<Navs navDesc="Profile"></Navs>
		<div class="profile-container">
			<TopPicture :topPictureAddress="'../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg'">
				<span class="slot-span">dsada</span>
			</TopPicture>
			<Avadar :avdarAdress="profileData.avadarAdress" :avadarName="profileData.name"></Avadar>
		</div>
		
		<div class="picture-list clearfix">
			<div class="picture-list-desc">
				<span>相册</span>
			</div>
			<PictureLayer v-for="pictureAddress in profileData.pictureList" :pictureAddress="pictureAddress"></PictureLayer>
		</div>
		<Toast :dispatch="'changeProfileToast'" :lifeCycle="1000" v-if="profileToast" >关注成功</Toast>
	</div>
</template>
<script>
	import Navs from '../components/Navs'
	import TopPicture from '../components/TopPicture'
	import PictureLayer from '../components/PictureLayer'
	import Avadar from '../components/Avadar'
	import Toast from '../components/Toast'
	export default {
		components: {
			Navs,
			TopPicture,
			PictureLayer,
			Avadar,
			Toast
		},
		computed: {
			profileData: function() {
				return this.$store.getters.profileData
			},
			profileToast: function() {
				return this.$store.getters.profileToast
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
				bottom: -8rem;
			}
		}
		.picture-list {
			.picture-list-desc {
				text-align: left;
				background-color: #fff;
				box-shadow: 0 0.5rem 0.8rem 0 rgba(0,0,0,0.07);
				span {
					color: #8f8f8f;
					margin-left: 5%;
					padding-bottom: 0.3rem;
					display: block;
				}
			}
			margin-top: 9.5rem;
			.photo-thumbnail {
				width: 32%;
				height: 10rem;
				position: relative;
				max-width: 9rem;
				margin-top: 0.8rem;
				img {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%)
				}
			}
			@media screen and (max-width: 320px) {
			    .photo-thumbnail {
					height: 8rem;
			    }
			}
		}
	}
</style>