<template>
<transition name="toast-fade">
	<div class="toast">
		<slot></slot>
	</div>
</transition>
</template>
<script>
export default {
	props: ['dispatch', 'lifeCycle'],
	mounted: function() {
		let lifeCycle = this.lifeCycle || 1000
		let self = this
		setTimeout(function() {
			self.$store.dispatch(self.dispatch, false)
		}, lifeCycle)
	}
}
</script>
<style lang="scss">
	
	.toast {
		// width: 7rem;
		padding: 0 1rem;
		height: 3rem;
		border-radius: 2rem;
		background-color: #282828;
		opacity: 1;
		color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1, 1);
		display: inline-block;
		line-height: 3rem;
		text-align: center;
	}
	.toast-fade-enter {
		transform: translate(-50%, -50%) scale(1.2, 1.2);
		opacity: 0;
	}
	.toast-fade-enter-active, .toast-fade-leave-active{
		transition: all 0.3s;
	}
	.toast-fade-leave-active {
		transform: translate(-50%, -50%) scale(0.8, 0.8);
		opacity: 0;
	}
</style>