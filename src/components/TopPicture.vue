<template>
	<div id="top-item">
		<div class="top-img-cont">
			<img src="../assets/FONT.jpg" alt="">
		</div>
		<div class="shadow"></div>
		<span>sss</span>
	</div>
</template>
<style lang="scss">
	#top-item {
		width: 100%;
		height: 13rem;
		position: relative;
		overflow: hidden;
		.top-img-cont {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: -1;
			img {
				width: 100%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
		.shadow {
				width: 100%;
				height: 13rem;
				top: 0;
				position: absolute;
				box-shadow: 0 -0rem 10rem black inset;
				// background-color: #fff;
		}
		span {
			color: #fff;
			position: absolute;
			bottom: 2rem;
		}
	}
</style>