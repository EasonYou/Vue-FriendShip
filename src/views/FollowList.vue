<template>
	<div class="container">
		<div class="follow-item-wapper">
			<FollowItem v-for="list in followList" :list="list"></FollowItem>
		</div>
	</div>
</template>
<script>
	import FollowItem from '../components/FollowItem'
	export default {
		components: {
			FollowItem
		},
		computed: {
			followList: function() {
				return this.$store.getters.followList
			}
		},
		destroyed: function() {
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		}
	}
</script>
<style lang="scss">
	.container {
		width: 100%;
		.follow-item-wapper {
			margin-top: 3.5rem;
		}
	}
</style>