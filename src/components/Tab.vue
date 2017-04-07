<template>
	<div class="tab-container">
	<div class="tab-btn-container">
		<div class="tab-btn" v-bind:class="{'active': side}" @click="transLeft">{{ tabList[0] }}</div>
		<div class="tab-btn" v-bind:class="{'active': !side}" @click="transRight">{{ tabList[1] }}</div>
	</div>
		<div class="tab-item" v-bind:class="{'tab-item-active': !side}">
			<div class="refresh-icon">{{ refreshDesc }}</div>
			<div class="refresh-icon">{{ refreshDesc }}</div>
			<div class="tab" @touchstart="init" @touchmove="refresh" @touchend="complete($event, 'left')">
				<slot name="left"></slot>
			</div>
			<div class="tab" @touchstart="init" @touchmove="refresh" @touchend="complete($event, 'right')">
				<slot name="right"></slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['status', 'tabList', 'dispatch', 'getter'],
		data: function() {
			return {
				side: this.$store.getters[this.getter],
				start: 0,
				offset: 0,
				scrollTop: 0,
				refreshDesc: '下拉刷新'
			}
		},
		methods: {
			transLeft () {
				console.log(this)
				this.$store.dispatch('changeTabStatus', true)
				this.side = true
			},
			transRight () {
				this.$store.dispatch('changeTabStatus', false)
				this.side = false
			},
			init (e) {
				this.start = e.changedTouches[0].pageY
				this.scrollTop = document.getElementsByClassName('homeLeft')[0].scrollTop
			},
			refresh (e) {
				if(e.currentTarget.style.transition) {
					e.currentTarget.style.transition = null
				}
				this.offset = e.changedTouches[0].pageY - this.start
				if(this.offset<0) {
					return
				}
				if(e.currentTarget.childNodes[0].scrollTop === 0 ) {
					e.preventDefault()
					e.currentTarget.style.transform = 'translateY('+ (this.offset-this.scrollTop)/2 +'px)'
					if((this.offset-this.scrollTop)/2 > 80) {
						this.refreshDesc = '↑释放刷新'
					} else {
						this.refreshDesc = '↓下拉刷新'
					}
				}
			},
			complete (e, type) {
				if(e.currentTarget.childNodes[0].scrollTop === 0 ) {
					let buff = this.offset / 2
					this.offset = this.start = 0
					e.currentTarget.style.transition = 'all 0.4s'
					e.currentTarget.style.transform = null
					if(buff < 100) return
					if(type === 'left') {
						this.$emit('left')
					}
					if(type === 'right') {
						this.$emit('right')
					}
				}
			}
		},
		computed: {
			containerWidth: function() {
				let tabContainer = document.getElementsByClassName('tab-container')[0]
				let width = parseInt(getComputedStyle(tabContainer, null).width)
				return width
			}
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
	background-color: #28afb9;
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
			background-color: #28afb9;
			color: #fff;
			transition: all 0.3s;
			transform: translateX(0);
		}
		.active {
			background-color: #22949d;
		}
	}
	.tab-item {
		width: 200%;
		float: left;
		height: 100%;
		position: absolute;
		top: 2rem;
		transition: all 0.3s;
		// background-color: #fff;
		.refresh-icon {
			width: 50%;
			position: absolute;
			top: 1rem;
			color: #fff;
		}
		.refresh-icon:first-child {
			left: 50%;
		}
		.tab {
			width: 50%;
			height: 100%;
			float: left;
			position: relative;
			// box-shadow: 2rem -1rem 3rem rgba(0,0,0,0.2);
		}
	}
	.tab-item-active {
		transform: translateX(-50%);
	}
}
</style>