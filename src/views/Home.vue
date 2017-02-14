<template>
	<div id="home" class="container">
	<Tab :status="tabStatus" :tabList="tabList" :dispatch="'changeTabStatus'" :getter="'tabStatus'">
		<div class="container " slot="left" v-autoSroll="[scrollTop, 'homeLeft']">
			<TopPicture :topPictureDesc="topPictureDesc" :topPictureAddress="topPictureAddress">
				<div class="btnctn">
					<Btn :className="'btn-gray'">
						<router-link :to="'followlist'">我的关注</router-link>
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
		<div class="container" slot="right" v-autoSroll="[scrollTop, 'homeRight']">
			<TopPicture :topPictureDesc="topPictureDesc" :topPictureAddress="topPictureAddress"></TopPicture>
			<div class="photo-items-cont">
				<PhotoItem v-for="(picL, index) in pictureList" 
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
			delAlertStatus: function() {
				return this.$store.getters.delAlertStatus
			},
			topPictureDesc: function() {
				return this.$store.getters.topPictureDesc
			},
			topPictureAddress: function() {
				return this.$store.getters.topPictureAddress
			},
			tabStatus: function() {
				return this.$store.getters.tabStatus
			}
		},
		created: function() {
			this.$store.dispatch('changeNavName', 'Vue-FriendShip')
		},
		mounted: function() {
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
			this.$emit('navName', 'Vue-FriendShip')
		},
		destroyed: function() {
			this.$store.dispatch('navShow')
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