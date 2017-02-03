<template>
	<div class="container">
		<TopPicture></TopPicture>
		<PhotoItem v-for="(picL, index) in pictureList" 
				   :pictureList="picL" 
				   :index="index" ></PhotoItem>

	</div>
</template>
<script>
	import PhotoItem from '../components/PhotoItem'
	import TopPicture from '../components/TopPicture'
	export default {
		components: {
			PhotoItem,
			TopPicture
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
		}
	}
</script>