<template>
	<div class="container">
		<Loading v-if="loadingStatus"></Loading>
		<div class="follow-item-wapper">
			<FollowItem v-for="list in followList" :list="list"></FollowItem>
		</div>
	</div>
</template>
<script>
	import Loading from '../components/Loading'
	import FollowItem from '../components/FollowItem'
	export default {
		components: {
			FollowItem,
			Loading
		},
		computed: {
			followList () {
				return this.$store.getters.followList
			},
			userName () {
				return this.$store.getters.userName
			},
			followToast () {
				return this.$store.getters.followToast
			},
			loadingStatus () {
		      return this.$store.getters.loadingStatus
		    }
		},
		activated () {
			this.$store.dispatch('getFollowList', this.userName)
			this.$store.dispatch('changeNavName', '我的关注')
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		},
		deactivated () {
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