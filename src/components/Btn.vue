<template>
	<div class="btn" v-bind:style="{ backgroundColor: bgColor}" v-on:click="btnEvent">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: ['btnDesc', 'bgColor'],
		methods: {
			btnEvent: function() {
				this.$emit('click')
			}
		}
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
		box-shadow: 0 0 1rem rgba(0,0,0,0.2);
		a {
			display: inline-block;
			width: 100%;
			color: #fff;
		}
	}
</style>