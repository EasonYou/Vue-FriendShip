<template>
	<router-link class="link-avadar" :to="'/profile/' + id">
		<div class="clearfix" v-on:click="emit" >
			<img :src="avadarSrc === '-' ? 'http://myishu.top/yishu/avadar.png' : avadarSrc" @click="emit">
			<span @click="emit">{{ name }}</span>
		</div>
	</router-link>
</template>
<script>
	export default {
		props: ['avadarSrc', 'name', 'id'],
		methods: {
			emit: function() {
				this.$emit('click')
			}
		}
	}
</script>
<style lang="scss">
	.link-avadar {
		display: inline-block;
		width: 20%;
		height: 5rem;
		overflow: hidden;
		padding-left: 0rem;
		text-align: center;
		float: left;
		position: relative;
		img {
			width: 3.2rem;
			height: 3.2rem;
			text-align: center;
			margin-left: 0.3rem;
			// position: absolute;
			// // left: 50%;
			// // transform: translateX(-50%);
			border-radius: 50%;
		}
		span {
			font-size: 0.8rem;
			line-height: 0.8rem;
			color: #6d6d6d;
			display: inline-block;
			width: 100%;
			text-align: center;
		}
	}
</style>