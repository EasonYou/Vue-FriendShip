<template>
	<div class="container">
		<div class="follow-item-wapper">
			<FollowItem v-for="list in followList" :list="list"></FollowItem>
		</div>
		<Toast :dispatch="'changeFollowToast'" :lifeCycle="1000" v-if="followToast" >关注成功</Toast>
	</div>
</template>
<script>
	import FollowItem from '../components/FollowItem'
	import Toast from '../components/Toast'
	export default {
		components: {
			FollowItem,
			Toast
		},
		computed: {
			followList: function() {
				return this.$store.getters.followList
			},
			userName: function() {
				return this.$store.getters.userName
			},
			followToast: function() {
				return this.$store.getters.followToast
			}
		},
		activated: function() {
			this.$store.dispatch('getFollowList', this.userName)
			this.$store.dispatch('changeNavName', '我的关注')
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		},
		deactivated: function() {
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