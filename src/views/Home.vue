<template>
	<div class="container">
		<Navs></Navs>
		<TopPicture></TopPicture>
		<div class="photo-items-cont">
			<PhotoItem v-for="(picL, index) in pictureList" 
					   :pictureList="picL" 
					   :index="index" ></PhotoItem>
		</div>
		<PictureView v-if="pictureView"></PictureView>
	</div>
</transition>
</template>
<script>
	import PhotoItem from '../components/PhotoItem'
	import TopPicture from '../components/TopPicture'
	import Navs from '../components/Navs'
	import PictureView from '../components/PictureView'
	export default {
		components: {
			PhotoItem,
			TopPicture,
			Navs,
			PictureView
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
			}
		}
	}
</script>