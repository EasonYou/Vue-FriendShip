<template>
	<div class="container">
		<Navs navDesc="HomePage"></Navs>
		<p>sassa</p>
		<p>sassa</p>
		<p>sassa</p>
		<p>sassa</p>

	</div>
</template>
<script>
	import Navs from '../components/Navs'
	export default {
		components: {
			Navs
		},
		destroyed: function() {
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		}
	}
</script>
<style lang="scss">
	.container {
		width: 100%;
	}
</style>