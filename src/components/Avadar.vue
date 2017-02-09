<template>
	<div class="avadar-container">
		<div class="avadar">
			<img :src="avdarAdress" alt="">
		</div>
		<span class="avadar-name">{{ avadarName }}</span>
		<Button :btnDesc="'留言'" :bgColor="'#71d4a1'"></Button>
	</div>
</template>
<script>
	import Button from './Button'
	export default {
		props: ['avdarAdress', 'avadarName'],
		components: {
			Button
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