<template>
<div class="follow-item clearfix">
	<AvadarLink :avadarSrc="list.src" :name="list.name" :id="list.id" @click="changeFollowListBtn"></AvadarLink>
	<div class="text-container clearfix">
		<span class="desc">{{ list.desc }}</span>
		<span class="follow-number">follow number: {{ list.followNumber }}</span>
	</div>
	<div class="btn-container">
		<Btn :className="'red-btn'" @click="follow">取消关注</Btn>
	</div>
</div>
</template>
<script>
	import AvadarLink from '../components/AvadarLink'
	import Btn from '../components/Btn'
	export default {
		props: ['list'],
		components: {
			AvadarLink,
			Btn
		},
		methods: {
			follow: function() {
				this.$toast('取消关注成功！')
				/* post */
			},
			changeFollowListBtn: function() {
				this.$store.dispatch('changeFollowListBtn', false)
			}
		}
	}
</script>
<style lang="scss">
	.follow-item {
		padding: 1.1rem 0 0.8rem 0;
		height: 4.6rem;
		position: relative;
		border-bottom: 1px solid #ececec;
		.text-container {
			height: 100%;
			position: relative;
			width: 60%;
			float: left;
			span {
				display: block;
				text-align: left;
				position: absolute;
			}
			.desc {
				height: 1.3rem;
				overflow: hidden;
				top: 1.3rem;
			}
			.follow-number {
				bottom: 0;
			}
		}
		.btn-container {
			width: 20%;
			height: 100%;float: left;
			.btn {
				margin-top: 1rem;
				margin-left: 0;
			}
			.red-btn {
				background-color: #f37272;
			}
			.red-btn:active {
				background-color: #d06262;
			}
		}
	}
	.follow-item:last-child {
		border: none;
	}
</style>