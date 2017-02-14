<template>
	<div class="btn" v-bind:style="{ backgroundColor: bgColor}" v-bind:class="className" v-on:click="btnEvent">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: ['bgColor', 'className'],
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
		border-radius: 0.2rem;
		transition: all 0.3s;
		font-size: 0.9rem;
		user-select: none;
		a {
			display: inline-block;
			width: 100%;
			color: #fff;
		}
	}
</style>