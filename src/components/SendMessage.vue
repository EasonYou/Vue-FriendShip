<template>
<transition name="send-block">
	<div class="send-block">
		<div class="block">
			<textarea type="text" v-focus class="send-block-text" :placeholder="replyUser"></textarea>
			<button v-on:click="send">发送</button>
		</div>
	</div>
</transition>
</template>
<script>
	export default {
		mounted: function() {
			let sendBlockText = document.getElementsByClassName('send-block-text')[0]
			var that = this
			sendBlockText.addEventListener('blur', function() {
				that.$store.dispatch('changeSendBlock')
			}, false)
		},
		computed: {
			replyUser: function() {
				return this.$store.getters.replyUser
			},
			userName: function() {
				return this.$store.getters.userName
			},
			replyMessage: function() {
				return this.$store.getters.replyMessage
			}
		},
		methods: {
			send:function() {
				let text = document.getElementsByClassName('send-block-text')[0].value;
				let replyUser = this.replyUser
				let arr = {
					sent: this.userName,
					receive: replyUser.substring(2),
					text: text
				}
				this.replyMessage.push(arr)
			}
		}
	}
</script>
<style lang="scss">
	.send-block-enter ,.send-block-leave-active{
		transform: translateY(3.4rem);
	}
	.send-block-enter-active ,.send-block-leave-active {
		transition:  0.2s;
	}
	.send-block {
		position: fixed;
		width: 100%;
		height: 3.4rem;
		bottom: 0;
		background-color: #fafafa;
		.block {
			textarea {
				margin: 0.5rem 0;
				margin-left: 2%;
				padding: 0.2rem;
				padding-top: 0.4rem;
				width: 75%;
				height: 1.8rem;
				border: 0;
				float: left;
				font-size: 1.4rem;
				line-height: 1.7rem;
				outline: none;
				resize: none;
				border: 1px solid #e1e1e1;
				border-radius: 0.3rem;
			}
			button {
				height: 2rem;
				width: 15%;
				float: left;
				margin: 0.8rem 0;
				border: 0;
				background-color: #57a97f;
				margin-left: 3%;
				color: #fff;
			}
		}
		.send-mask {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
		}
	}
</style>