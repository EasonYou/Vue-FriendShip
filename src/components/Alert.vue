<template>
	<div class="alert-container">
		<transition name="alert-mask-fade">	
				<div class="alert-masks" v-show="show" v-on:click="closeAlert"></div>
		</transition>
		<transition name="alert-fade">	
				<div class="alert" v-show="show"></div>
		</transition>
	</div>
</template>
<script>
	export default {
		methods: {
			closeAlert: function() {
				console.log('aaa')
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

.alert-container {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	.alert {
		width: 85%;
		height: 8rem;
		background-color: #f1f1f1;
		color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 9001;
		border-radius: 0.5rem;
		box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
	}
	.alert-masks {
		background-color: #000;
		opacity: 0.5;
		width: 100%;
		height: 100%;
		z-index: 9000;
		position: fixed;
		top: 0;
	}
	.alert-mask-fade-enter ,.alert-mask-fade-leave-active {
	opacity: 0;
	}
	.alert-mask-fade-enter-active ,.alert-mask-fade-leave-active {
		transition: all .5s;
	}
	.alert-fade-enter ,.alert-fade-leave-active {
		opacity: 0;
		transform: translate(-50%, -60%);
	}
	.alert-fade-enter-active ,.alert-fade-leave-active {
		transition: all .5s;
	}
}

</style>