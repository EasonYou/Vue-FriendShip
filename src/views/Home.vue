<template>
	<div id="home" class="container">
	<Tab :status="tabStatus" :tabList="tabList" :dispatch="'changeTabStatus'" :getter="'tabStatus'">
		<div class="container homeLeft" slot="left">
			<TopPicture :topPictureDesc="topPictureDesc" :topPictureAddress="topPictureAddress">
				<div class="btnctn">
					<Btn :className="'btn-gray'">
						<router-link :to="'followlist/' + userName ">我的关注</router-link>
					</Btn>
				</div>
			</TopPicture>
			<div class="photo-items-cont">
				<PhotoItem v-for="(picL, index) in pictureList" 
						   :pictureList="picL" 
						   :index="index" >
				</PhotoItem>
			</div>
		</div>
		<div class="container homeRight" slot="right">
			<TopPicture :topPictureDesc="allTopPictureDesc" :topPictureAddress="allTopPictureAddress"></TopPicture>
			<div class="photo-items-cont">
				<PhotoItem v-for="(picL, index) in allPictureList" 
						   :pictureList="picL" 
						   :index="index" >
				</PhotoItem>
			</div>
		</div>
	</Tab>
	</div>
</transition>
</template>
<script>
	import PhotoItem from '../components/PhotoItem'
	import TopPicture from '../components/TopPicture'
	import Navs from '../components/Navs'
	import Alert from '../components/Alert'
	import Tab from '../components/Tab'
	import Btn from '../components/Btn'
	export default {
		components: {
			PhotoItem,
			TopPicture,
			Navs,
			Alert,
			Tab,
			Btn
		},
		data: function() {
			return {
				tabList:['朋友圈', '广场']
			}
		},
		computed: {
			scrollTop: function() {
				return this.$store.getters.scrollRecord
			},
			pictureList: function() {
				return this.$store.getters.pictureList
			},
			topPictureDesc: function() {
				return this.$store.getters.topPictureDesc
			},
			topPictureAddress: function() {
				return this.$store.getters.topPictureAddress
			},
			userName: function() {
				return this.$store.getters.userName
			},
			tabStatus: function() {
				return this.$store.getters.tabStatus
			},
			allPictureList: function() {
				return this.$store.getters.allPictureList
			},
			allTopPictureDesc: function() {
				return this.$store.getters.allTopPictureDesc
			},
			allTopPictureAddress: function() {
				return this.$store.getters.allTopPictureAddress
			}
		},
		deactivated: function() {
			this.scrollTop.homeLeft = document.getElementsByClassName('homeLeft')[0].scrollTop
			this.scrollTop.Right = document.getElementsByClassName('homeRight')[0].scrollTop
			this.$store.dispatch('navShow')
		},
		activated: function() {
			document.getElementsByClassName('homeLeft')[0].scrollTop = this.scrollTop.homeLeft
			document.getElementsByClassName('homeRight')[0].scrollTop = this.scrollTop.homeRight
			this.$store.dispatch('changeNavName', 'Vue-FriendShip')
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
			this.$emit('navName', 'Vue-FriendShip')
		}
	}
</script>
<style lang="scss">
	#home {
		.container {
			width: 100%;
			box-shadow: none;
		}
		.btnctn {
			position: absolute;
			top: 2%;
			right: 3%;
			width: 5rem;
			height: 1.5rem;
			.btn-gray {
				line-height: 1.5rem;
				background-color: #656565;
				height: 100%;
			}
			.btn-gray:active {
				background-color: #4c4c4c;
			}
		}
	}
</style>