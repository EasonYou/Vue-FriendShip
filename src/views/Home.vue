<template>
	<div id="home" class="container" v-autoSroll="[scrollTop, 'home']">
		<TopPicture :topPictureDesc="topPictureDesc" :topPictureAddress="topPictureAddress"></TopPicture>
		<div class="photo-items-cont">
			<PhotoItem v-for="(picL, index) in pictureList" 
					   :pictureList="picL" 
					   :index="index" >
			</PhotoItem>
		</div>
	</div>
</transition>
</template>
<script>
	import PhotoItem from '../components/PhotoItem'
	import TopPicture from '../components/TopPicture'
	import Navs from '../components/Navs'
	import Alert from '../components/Alert'
	export default {
		components: {
			PhotoItem,
			TopPicture,
			Navs,
			Alert
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