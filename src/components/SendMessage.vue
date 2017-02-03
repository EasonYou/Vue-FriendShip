<template>
	<div class="send-block">
		<div class="block">
			<textarea type="text" v-focus class="send-block-text"></textarea>
			<button>发送</button>
		</div>
	</div>
</template>
<script>
	export default {
		mounted: function() {
			let sendBlockText = document.getElementsByClassName('send-block-text')[0]
			var that = this
			sendBlockText.addEventListener('blur', function() {
				that.$store.dispatch('changeSendBlock')
			}, false)
		}
	}
</script>
<style lang="scss">
	.send-block {
		.block {
			width: 100%;
			height: 3.4rem;
			position: fixed;
			bottom: 0;
			background-color: #fafafa;
			z-index: 10;
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