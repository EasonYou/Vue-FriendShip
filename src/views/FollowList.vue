<template>
	<div class="container">
		<Loading v-if="loadingStatus"></Loading>
		<div class="follow-item-wapper">
			<FollowItem v-for="list in followList" :list="list"></FollowItem>
		</div>
		<Toast :dispatch="'changeFollowToast'" :lifeCycle="1000" v-if="followToast" >取消关注成功</Toast>
	</div>
</template>
<script>
	import Loading from '../components/Loading'
	import FollowItem from '../components/FollowItem'
	import Toast from '../components/Toast'
	export default {
		components: {
			FollowItem,
			Toast,
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