<template>
	<div class="container">
		<Navs></Navs>
		<TopPicture></TopPicture>
		<PhotoItem v-for="(picL, index) in pictureList" 
				   :pictureList="picL" 
				   :index="index" ></PhotoItem>

	</div>
</transition>
</template>
<script>
	import PhotoItem from '../components/PhotoItem'
	import TopPicture from '../components/TopPicture'
	import Navs from '../components/Navs'
	export default {
		components: {
			PhotoItem,
			TopPicture,
			Navs
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
			}
		},
		mounted: function() {
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		}
	}
</script>