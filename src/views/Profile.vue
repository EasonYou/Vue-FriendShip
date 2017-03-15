<template>
	<div id="profile" class="container">
		<Loading v-if="loadingStatus"></Loading>
		<div class="profile-container">
			<TopPicture :topPictureAddress="profileData.profileTopPic">
				<div class="information">
					<span class="birthday">Birthday: {{ profileData.birthday }}</span>
					<span class="gender">Gender: {{ profileData.gender }}</span>
					<span class="address">Address: {{ profileData.address }}</span>
				</div>
			</TopPicture>
			<Avadar 
				:avdarAdress="profileData.avadarAdress" 
				:avadarName="profileData.name"
				:userName="userName"></Avadar>
		</div>
		<transition name="picture-list">
			<div v-bind:class="{'picture-list-down':leaveWordStatus}" class="picture-list clearfix">
				<div class="picture-list-desc">
					<span>相册</span>
				</div>
				<div class="picture-list-container">
					<PictureLayer v-for="pictureAddress in profileData.pictureList" :pictureAddress="pictureAddress"></PictureLayer>
				</div>
			</div>
		</transition>
		<transition name="text-fade">
			<div class="text-input-block" v-if="leaveWordStatus">
				<TextInput v-on:dataUpdate="dataUpdate" :textbinding="leaveWordBinding" :holder="'留言限制在256个字符以内'"></TextInput>
				<Btn :className="'btn-green'" @click="submit">确定留言</Btn>
			</div>
		</transition>
		<Toast :dispatch="'changeLeavewordsToast'" :lifeCycle="1000" v-if="leavewordsToast" >留言成功</Toast>
		<Toast :dispatch="'changeProfileToast'" :lifeCycle="1000" v-if="profileToast" >关注成功</Toast>
		<Toast :dispatch="'changeTextareaToast'" :lifeCycle="1200" v-if="textareaToast" >超过256个字符</Toast>
	</div>
</template>
<script>
	import Loading from '../components/Loading'
	import Navs from '../components/Navs'
	import TopPicture from '../components/TopPicture'
	import PictureLayer from '../components/PictureLayer'
	import Avadar from '../components/Avadar'
	import Toast from '../components/Toast'
	import TextInput from '../components/TextInput'
	import Btn from '../components/Btn'
	import util from '../util'
	export default {
		components: {
			Navs,
			TopPicture,
			PictureLayer,
			Avadar,
			Toast,
			TextInput,
			Btn,
			Loading
		},
		data () {
			return {
				leaveWordBinding: ''
			}
		},
		computed: {
			scrollTop () {
				return this.$store.getters.scrollRecord
			},
			profileData () {
				return this.$store.getters.profileData
			},
			profileToast () {
				return this.$store.getters.profileToast
			},
			leavewordsToast () {
				return this.$store.getters.leavewordsToast
			},
			leaveWordStatus () {
				return this.$store.getters.leaveWordStatus
			},
			textareaToast () {
				return this.$store.getters.textareaToast
			},
			followListBtn () {
				return this.$store.getters.followListBtn
			},
			loadingStatus () {
		      return this.$store.getters.loadingStatus
		    },
		    userName () {
		    	return this.$store.getters.userName
		    }
		},
		methods: {
			submit () {
				let length = this.leaveWordBinding.length
				if(this.leaveWordBinding.trim().length === 0) {
					return
				}
				if(length > 256) {
					this.$store.dispatch('changeTextareaToast', true)
					return ;
				}
				this.$store.dispatch('submit', this)
			},
			dataUpdate (val) {
				this.leaveWordBinding = val
			}
		},
		activated () {
			this.$store.dispatch('changeNavName', '详细信息')
			this.$store.dispatch('getProfileData', this.$route.params.id)
			this.$emit('navName', 'Profile')
		},
		deactivated () {
			this.leaveWordBinding = ''
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
			this.$store.dispatch('closeLeaveWordStatus', false)
			this.$store.dispatch('navShow')
			this.$store.dispatch('changeFollowListBtn', true)
		},
		watch: {
			$route (to, from) {
				let path = to.path.split('/')[1]
				if(to.path === '/myinformation' || path === 'profile') {
					this.$store.dispatch('getProfileData', this.$route.params.id)
				}
			}
		}
	}
</script>
<style lang="scss">
	
	.container {
		width: 100%;
		.profile-container {
			margin-top: 3rem;
			position: relative;
			.top-item {
				.shadow {
					box-shadow: 0 3rem 10rem 2rem rgba(0,0,0,1) inset;
				}
				.information {
					position: absolute;
					top: 20%;
					left: 7%;
					text-align: left;
					span {
						margin-top: 0.5rem;
						display: block;
						color: #fff;
					}
				}
			}
			.avadar-container {
				position: absolute;
				bottom: -8rem;
			}
			.mucont {
				bottom: -9rem;
			}
		}
		.picture-list {
			position: absolute;
			width: 100%;
			margin-top: 9.5rem;
			margin-bottom: 2rem;
			transition: all 0.3s;
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
			.picture-list-container {
					display: flex;
					flex-wrap: wrap;
			}
			
			.photo-thumbnail {
				width: 33%;
				position: relative;
				max-width: 9rem;
				margin-top: 0.8rem;
				height: 10rem;
				img {
					width: 80%;
					height: auto;
					top: 50%;
					left: 50%;
				}
			}
			@media screen and (max-width: 320px) {
			    .photo-thumbnail {
					height: 8rem;
			    }
			}
		}
		.picture-list-down {
			transform: translateY(8.5rem);
		}
		.text-input-block {
			width: 100%;
			position: absolute;
			margin-top: 9.5rem;
			.btn-green {
				background-color: #71d4a1;
			}
			.btn-green:active {
				background-color: #5dad84;
			}
		}

		.picture-list-enter ,.text-fade-enter{
			transform: translateY(-10%);
			opacity: 0;
		}
		.picture-list-enter-active, .text-fade-enter-active, .text-fade-leave-active {
			transition: all .5s;
		}
		.text-fade-leave-active{
			transform: translateY(-10%);
			opacity: 0;
		}
	}
</style>