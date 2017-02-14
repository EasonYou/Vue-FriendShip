<template>
	<div class="tab-container">
	<div class="tab-btn-container">
		<div class="tab-btn" v-bind:class="{'active': side}" @click="transLeft">{{ tabList[0] }}</div>
		<div class="tab-btn" v-bind:class="{'active': !side}" @click="transRight">{{ tabList[1] }}</div>
	</div>
		<div class="tab-item" v-bind:class="{'tab-item-active': !side}">
			<div class="tab">
			<slot name="left"></slot>
			</div>
			<div class="tab">
			<slot name="right"></slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['status', 'tabList', 'dispatch', 'getter'],
		methods: {
			transLeft: function() {
				this.$store.dispatch('changeTabStatus', true)
				this.side = true
			},
			transRight: function() {
				this.$store.dispatch('changeTabStatus', false)
				this.side = false
			}
		},
		data: function() {
			return {
				side: this.$store.getters[this.getter]
			}
		},
		computed: {
			containerWidth: function() {
				let tabContainer = document.getElementsByClassName('tab-container')[0]
				let width = parseInt(getComputedStyle(tabContainer, null).width)
				return width
			}
		},
		created: function() {
			// 
			// 
			// 
		},
		mounted: function() {
			function resize() {
				if(document.getElementsByClassName('tab-container').length) {
					let innerHeight = window.innerHeight
					let tabContainer = document.getElementsByClassName('tab-container')[0]
					let top = parseInt(getComputedStyle(tabContainer, null).top)
					tabContainer.style.height = innerHeight - top + 'px'
				}
			}
			resize()
			window.addEventListener('resize', function() {
				resize()
			})
		}
	}
</script>
<style lang="scss">
.tab-container {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 3rem;
	overflow: hidden;
	.tab-btn-container {
		width: 100%;
		position: absolute;
		// top: 3rem;
		box-shadow: 0 0 1rem rgba(0,0,0,0.2);
		z-index: 1000;
		display: flex;
		.tab-btn {
			width: 100%;
			// float: left;
			height: 2rem;
			line-height: 2rem;
			background-color: #5ab385;
			color: #fff;
			transition: all 0.3s;
		}
		.active {
			background-color: #4c9870;
		}
	}
	.tab-item {
		width: 200%;
		float: left;
		height: 100%;
		position: absolute;
		top: 2rem;
		transition: all 0.3s;
		.tab {
			width: 50%;
			height: 100%;
			float: left;
			position: relative;
		}
	}
	.tab-item-active {
		transform: translateX(-50%);
	}
}
</style>