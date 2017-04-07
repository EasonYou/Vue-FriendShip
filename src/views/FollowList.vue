<template>
	<div class="container follow-list">
		<div class="search-input">
			<input type="text" v-model="keyword" placeholder="请输入关键字">
			<Btn @click="search">搜索</Btn>
		</div>
		<Loading v-if="loadingStatus"></Loading>
		<div class="follow-item-wapper">
			<FollowItem v-for="list in followList" :list="list"></FollowItem>
		</div>
		<div v-if="followList.length === 0" class="no-data">
			暂无数据
		</div>
	</div>
</template>
<script>
	import Loading from '../components/Loading'
	import FollowItem from '../components/FollowItem'
	import Btn from '../components/Btn'
	export default {
		components: {
			FollowItem,
			Loading,
			Btn
		},
		data () {
			return {
				loadingStatus: false,
				keyword: ''
			}
		},
		methods: {
			search () {
				let type
				if(this.$route.name === 'FollowList') {
					type = false
				}
				if(this.$route.name === 'Search') {
					type = true
				}
				this.$store.dispatch('getFollowList', {
					vue: this,
					keyword: this.keyword,
					type: type
				})
			}
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
			}
		},
		activated () {
			if(this.$route.name === 'FollowList') {
				console.log(this.$route)
				this.$store.dispatch('getFollowList', {
						vue: this
					})
			}
			this.$store.dispatch('changeNavName', '我的关注')
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
		},
		deactivated () {
			console.log(this.$store.getters)
			let self = this
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
			setTimeout(function() {
				self.keyword = ''
				self.$store.dispatch('clearFollowList')
			}, 500)
		},
		watch: {
			$route (to, from) {
				let a = /followlist/.test(from.path) && /search/.test(to.path)
				let b = /followlist/.test(to.path) && /search/.test(from.path)
				if(a) {
					this.$store.dispatch('clearFollowList')
				}
				if(b) {
					this.$store.dispatch('getFollowList', {
						vue: this
					})	
				}
			}
		}
	}
</script>
<style lang="scss">
	.follow-list {
		width: 100%;
		.loading {
			top: 0;
		}
		.search-input {
			height: 2.5rem;
			display: flex;
			margin-top: 3rem;
			background-color: #2ab7c2;
			box-shadow: 0 0 1rem rgba(0,0,0,0.2);
			input {
				transition: 0.2s all;
				background-color: #26a2ab;
				border: 0;
				width: 100%;
				color: #fff;
				padding-left: 1rem;
			}
			input:focus {
				background-color: #22939c;
				box-shadow: 0 0 1rem rgba(0,0,0,0.2);
				font-size: 1.3rem;
			}
			.btn {
				width: 5rem;
				margin: 0;
				background-color: #f8f8f8;
				color: #22939c;
				border-radius: 0;
				height: 2.5rem;
				line-height: 2.5rem;
			}
			.btn:active {
				background-color: #eeeeee;
			}
		}
		.no-data {
			color: #aeaeae;
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%)
		}
	}
</style>