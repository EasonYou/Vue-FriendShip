<template>
	<div class="btn" v-bind:style="{ backgroundColor: bgColor}">{{ btnDesc }}</div>
</template>
<script>
	export default {
		props: ['btnDesc', 'bgColor']
	}
</script>
<style lang="scss">
	.btn {
		margin: 0.2rem 5%;
		width: 90%;
		height: 2rem;
		color: #fff;
		background-color: #000;
		text-align: center;
		line-height: 2rem;
		border-radius: 0.3rem;
	}
</style>