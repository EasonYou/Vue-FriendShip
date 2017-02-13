<template>
	<div id="home" class="container">
	<Tab :status="tabStatus" :tabList="tabList" :dispatch="'changeTabStatus'" :getter="'tabStatus'">
		<div class="container " slot="left" v-autoSroll="[scrollTop, 'homeLeft']">
			<TopPicture :topPictureDesc="topPictureDesc" :topPictureAddress="topPictureAddress"></TopPicture>
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
	export default {
		components: {
			PhotoItem,
			TopPicture,
			Navs,
			Alert,
			Tab
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
	}
</style>