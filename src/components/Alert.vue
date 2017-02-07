<template>

	<div class="alert-container">
		<transition name="alert-mask-fade">		
				<div class="alert-masks" v-if="show" v-on:click="closeAlert"></div>
		</transition>
	</div>

</template>
<script>
	export default {
		methods: {
			closeAlert: function() {
				this.$store.dispatch('changeDelAlert', false)
			}
		},
		computed: {
			show: function() {
				return this.$store.getters.delAlertStatus
			}
		}
	}
</script>
<style lang="scss">

.alert-mask-fade-enter , .alert-mask-fade-leave-active {
	opacity: 0;
}
.alert-mask-fade-enter-active ,.alert-mask-fade-leave-active {
	transition: all 10s;
}
.alert-container {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 9999;
	.alert {
		width: 85%;
		height: 8rem;
		background-color: #fff;
		color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 1000;
		border-radius: 0.5rem;
		box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
	}
	.alert-masks {
		background-color: #000;
		opacity: 0.7;
		width: 100%;
		height: 100%;
	}
}
</style>