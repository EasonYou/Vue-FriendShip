<template>
	<transition name="toast-pop">
		<div class="toast" v-show="visible" :class="customClass" :style="{'padding': '10px 20px'}">
			<span class="toast-text">{{ message }}</span>
		</div>
	</transition>
</template>
<script>
	export default {
		props: {
			message: String,
			className: {
				type: String,
				default: ''
			},
			position: {
				type: String,
				default: 'middle'
			}
		},
		data() {
			return {
				visible: false
			}
		},
		computed: {
			customClass () {
				var classes = []
				switch (this.position) {
					case 'top':
						classes.push('is-placetop')
						break
					case 'bottom':
						classes.push('is-placebottom')
						break
					default:
						classes.push('is-placemiddle')
				}
				classes.push(this.className)
				return classes.join(' ')
			}
		}
	}
</script>
<style lang="scss">
	.toast {
		position: fixed;
		max-width: 80%;
		border-radius: 5px;
		background: rgba(0, 0, 0, 1);
		color: #fff;
		box-sizing: border-box;
		text-align: center;
		z-index: 1000;
		transition: all 0.3s linear;
		.toast-text {
			font-size: 14px;
			display: block;
			text-align: center;
		}
		
	}
	.is-placetop {
		top: 50px;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.is-placemiddle {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.is-placebottom {
		bottom: 50px;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.toast-pop-enter, .toast-pop-leave-active {
		opacity: 0;
	}
</style>