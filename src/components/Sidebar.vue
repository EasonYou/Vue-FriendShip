<template>
	<div class="side-container" id="side-bar">
			<div v-bind:class="{'side-bar-active': show && !right,
								'right-side-bar-active': show && right,
								'right-side-bar': right}" class="side-bar">
				<div class="top-pic">
					<img :src="picAdd" alt="">
				</div>
				<div class="shadow"></div>
				<ul>
					<li v-for="list in sideList" @click="hide">
						<router-link :to="list.link">{{ list.desc }}</router-link>
					</li>
				</ul>
			</div>
			<transition name="mask">
				<div v-show="show" class="mask" @click="hide" ></div>
			</transition>
	</div>
</template>
<script>
	export default {
		props:['show', 'sideList', 'picAdd', 'rightSide'],
		methods:{
			hide:function() {
				this.$emit('click')
			}
		},
		computed: {
			right: function() {
				return this.rightSide
			}
		},
		mounted: function() {
			let maxWidth = window.screen.width*0.7
			document.getElementsByClassName('side-bar')[0].style.maxWidth = maxWidth + 'px'
		}
	}
</script>
<style lang="scss">
	.mask {
		background-color: #000;
		width: 100%;
		height: 100%;
		position: fixed;
		opacity: 0.7;
		z-index: 8888;
		transition: 0.5s;
	}
	.mask-enter, .mask-leave-active {
		opacity: 0;
	}
	.mask-enter-active ,.mask-leave-active {
		transition: .3s;
	}

	.side-bar-enter{
	  transform: translate(-100%);
	  opacity: 0;
	}
	.side-bar-enter-active {
	  transition: 0.4s cubic-bezier(0.4, 0, 0, 1); 
	}
	.side-bar-leave-active {
	  transition: 0.4s cubic-bezier(0.4, 0, 0, 1);
	  opacity: 0;
	  transform: translate(-100%)
	}
	#side-bar .side-bar {
		width: 70%;
		height: 100%;
		background-color: #f1f1f1;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000;
		transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
		opacity: 1;
		transform: translate(-100%);
		.top-pic {
			width: 100%;
			height: 13rem;
			overflow: hidden;
			position: relative;

			img{
				width: 150%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%)
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
		ul{
			padding: 0;
			margin: 0;
			li{
				border-top: 1px solid #dedede;
				height: 3.5rem;
				line-height: 3.5rem;
				// border-bottom: 1px solid #aeaeae;
				list-style: none;
				position: relative;
				text-align: left;
				// padding-left: 3rem;
				a {
					text-indent: 3rem;
					text-decoration: none;
					color: #2c3e50;
					width: 100%;
					height: 100%;
					display: inline-block;
				}
				a:active {
					background-color: #dcdcdc;
				}
			}
			
			li:before{
				content:'';
				background: url(../assets/logo.png);
				height: 100%;
				width: 1.5rem;
				background-size: 100%;
				background-repeat: no-repeat;
				background-position: 0 1rem;
				position: absolute;
				left: 0.5rem;

				img {
					height: 100%;
				}

			}
			li:last-child{
				border-bottom: 1px solid #dedede;
			}

		}
	}
	#side-bar .side-bar-active {
		opacity: 1;
		transform: translate(0);
	}
	#side-bar .right-side-bar {
	    left: 100%;
	    opacity: 0;
	    transform: translate(0);
	}
	#side-bar .right-side-bar-active {
		opacity: 1;
		transform: translate(-100%);
	}
</style>