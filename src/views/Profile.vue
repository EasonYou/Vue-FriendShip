<template>
	<div id="profile" class="container">
		<Navs navDesc="Profile"></Navs>
		<div class="profile-container">
			<TopPicture :topPictureAddress="'../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg'">
				<span class="slot-span">dsada</span>
			</TopPicture>
			<Avadar :avdarAdress="profileData.avadarAdress" :avadarName="profileData.name"></Avadar>
		</div>
		<transition name="picture-list">
			<div v-show="!leaveWordStatus" class="picture-list clearfix">
				<div class="picture-list-desc">
					<span>相册</span>
				</div>
				<PictureLayer v-for="pictureAddress in profileData.pictureList" :pictureAddress="pictureAddress"></PictureLayer>
			</div>
		</transition>
		<transition name="text-fade">
			<div class="text-input-block" v-if="leaveWordStatus">
				<TextInput :textbinding="leaveWordBinding"></TextInput>
				<Btn :bgColor="'#71d4a1'" @click="submit">确定留言</Btn>
			</div>
		</transition>
		<Toast :dispatch="'changeProfileToast'" :lifeCycle="1000" v-if="profileToast" >关注成功</Toast>
		<Toast :dispatch="'changeTextareaToast'" :lifeCycle="1200" v-if="textareaToast" >超过256个字符</Toast>
	</div>
</template>
<script>
	import Navs from '../components/Navs'
	import TopPicture from '../components/TopPicture'
	import PictureLayer from '../components/PictureLayer'
	import Avadar from '../components/Avadar'
	import Toast from '../components/Toast'
	import TextInput from '../components/TextInput'
	import Btn from '../components/Btn'
	export default {
		components: {
			Navs,
			TopPicture,
			PictureLayer,
			Avadar,
			Toast,
			TextInput,
			Btn
		},
		computed: {
			profileData: function() {
				return this.$store.getters.profileData
			},
			profileToast: function() {
				return this.$store.getters.profileToast
			},
			leaveWordStatus: function() {
				return this.$store.getters.leaveWordStatus
			},
			textareaToast: function() {
				return this.$store.getters.textareaToast
			},
			leaveWordBinding: function() {
				return this.$store.getters.leaveWordBinding
			}
		},
		methods: {
			submit: function() {
				let textarea = document.getElementsByClassName('text-input-block')[0].getElementsByTagName('textarea')[0]
				let length = textarea.value.length
				if(length > 256) {
					console.log('aaa')
					this.$store.dispatch('changeTextareaToast', true)
					return ;
				}
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
			position: absolute;
			width: 100%;
			margin-top: 9.5rem;
			margin-bottom: 2rem;
			// overflow: hidden;
			.picture-list-desc {
				text-align: left;
				background-color: #fff;
				box-shadow: 0 0.5rem 2rem 0 rgba(0,0,0,0.07);
				span {
					color: #8f8f8f;
					margin-left: 5%;
					padding-bottom: 0.3rem;
					display: block;
				}
			}
			
			.photo-thumbnail {
				width: 33%;
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
		.text-input-block {
			width: 100%;
			position: absolute;
			margin-top: 9.5rem;
		}

		.picture-list-enter ,.text-fade-enter{
			transform: translateY(3%);
			opacity: 0;
		}
		.picture-list-enter-active, .picture-list-leave-active, .text-fade-enter-active, .text-fade-leave-active {
			transition: all 0.5s;
		}
		.picture-list-leave-active, .text-fade-leave-active{
			transform: translateY(3%);
			opacity: 0;
		}
	}
</style>