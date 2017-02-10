<template>
	<div class="avadar-container">
		<div class="avadar">
			<img :src="avdarAdress" alt="">
		</div>
		<span class="avadar-name">{{ avadarName }}</span>
		<Btn :bgColor="color" @click="changeLeaveWordStatus" >
			<!-- <router-link :to="'leavewords'">留言</router-link> -->
			{{ leaveWordTitle }}
		</Btn>
		<Btn :bgColor="'#71bfd4'" @click="follow">关注</Btn>
	</div>
</template>
<script>
	import Btn from './Btn'
	export default {
		props: ['avdarAdress', 'avadarName'],
		components: {
			Btn
		}, 
		methods: {
			follow: function() {
				/*some ajax operate*/
				this.$store.dispatch('changeProfileToast', true)
			},
			changeLeaveWordStatus: function() {
				this.$store.dispatch('changeLeaveWordStatus')
			}
		},
		computed: {
			leaveWordStatus: function() {
				return this.$store.getters.leaveWordStatus
			},
			color: function() {
				if(this.leaveWordStatus) {
					return '#d06a6a'
				} else {
					return '#71d4a1'
				}
			},
			leaveWordTitle: function() {
				if(this.leaveWordStatus) {
					return '取消留言'
				} else {
					return '留言'
				}
			}
		}
	}
</script>
<style lang="scss">
	.avadar-container {
		width: 100%;
		text-align: center;
		.avadar {
			height: 6rem;
			width: 6rem;
			display: inline-block;
			border-radius: 50%;
			overflow: hidden;
			background-color: #fff;
			position: relative;
			box-shadow: 0 0 1rem rgba(0,0,0,0.3);
			img {
				width: 94%;
				height: 94%;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%)
			}
		}
		.avadar-name {
			display: block;
			font-size: 1.1rem;
		}
	}
</style>