<template>
	<div class="textarea">
		<textarea name="" id="" rows="5" calss="textare-block" v-focus v-model="textbinding"></textarea>
	</div>
</template>
<script>
	export default {
		props: ['borderColor', 'textbinding']
	}
</script>
<style lang="scss">
	.textarea {
		width: 100%;
		textarea {
			width: 90%;
			outline: none;
			resize: none;
			border: 1px solid #dcdcdc;
			font-size: 1.2rem;
		}
	}
</style>