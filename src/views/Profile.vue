<template>
	<div class="container">
		<Navs navDesc="Profile"></Navs>
		<div class="profile-container">
			
		</div>

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
		.profile-container {
			margin-top: 4rem;
		}
	}
</style>