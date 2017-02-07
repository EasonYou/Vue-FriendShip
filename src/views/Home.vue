<template>
	<div class="container">
		<Navs></Navs>
		<Alert v-if="delAlertStatus"></Alert>
		<TopPicture></TopPicture>
		<div class="photo-items-cont">
			<PhotoItem v-for="(picL, index) in pictureList" 
					   :pictureList="picL" 
					   :index="index" >
			</PhotoItem>
		</div>
		<PictureView v-show="pictureView"></PictureView>
	</div>
</transition>
</template>
<script>
	import PhotoItem from '../components/PhotoItem'
	import TopPicture from '../components/TopPicture'
	import Navs from '../components/Navs'
	import PictureView from '../components/PictureView'
	import Alert from '../components/Alert'
	export default {
		components: {
			PhotoItem,
			TopPicture,
			Navs,
			PictureView,
			Alert
		},
		data: function() {
			return {
				wades: [
					 'wade1',
					 'wade2'
				]
			}
		},
		computed: {
			pictureList: function() {
				console.log(this.$store)
				return this.$store.getters.pictureList
			},
			pictureView: function() {
				return this.$store.getters.pictureView
			},
			delAlertStatus: function() {
				return this.$store.getters.delAlertStatus
			}
		},
		mounted: function() {
			console.log(this)
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		}
	}
</script>