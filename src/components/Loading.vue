<template>
<transition name="loading">
	<div class="loading">
		<div class="loading-cont">
			<div class="spinner"></div>
			<div>loading...</div>
		</div>
	</div>
</transition>
</template>
<style lang="scss">
	#app {
		.loading {
			width: 100%;
			height: 100%;
			background-color: #fff;
			position: absolute;
			z-index: 999;
			display: flex;
			align-items: center;
			justify-content: center;
			.loading-cont {
				.spinner {
				  width: 5rem;
				  height: 5rem;
				  background-color: #71d4a1;
				  border-radius: 100%; 
				  -webkit-animation: scaleout 1.0s infinite ease-in-out;
				  animation: scaleout 1.0s infinite ease-in-out;
				}
			}
			@keyframes scaleout {
			  0% {
			    transform: scale(0.0);
			    -webkit-transform: scale(0.0);
			  } 100% {
			    transform: scale(1.0);
			    -webkit-transform: scale(1.0);
			    opacity: 0;
			  }
			}
		}
		.loading-leave-active {
			opacity: 0;
			transition: all 0.3s;
		}
	}
</style>