<template>
	<nav class="top-nav">
	    <span class="nav-left" v-on:click="back"></span>
	    <h3>{{ navDesc }}</h3>
	    <span class="nav-right" v-on:click="change">
        <span></span>
        <span></span>
        <span></span>
      </span>
	</nav>
</template>
<script>
	export default {
      props:['navDesc'],
      computed: {
        hash: function() {
          let flag = (this.$route.fullPath === '/' || this.$route.fullPath === '/home')?true : false
          return !flag
        }
      },
	  	methods:{
  	    change:function() {
  	      this.$store.dispatch('changeSidebar')
  	    },
        back:function() {
          if(this.hash) {
            this.$store.dispatch('changeDirection', 'left-to-right-fade')
            window.history.back();
          } else {
            /* native operation */
          }
        }
  	  },
      created: function(e) {
        window.addEventListener('resize', function() {
          let screenWidth = window.innerWidth
          let nav = document.getElementsByClassName('top-nav')[0]
          nav.style.width = screenWidth + 'px'
        })
      },
      mounted: function() {
        let screenWidth = window.innerWidth
        let nav = document.getElementsByClassName('top-nav')[0]
        nav.style.width = screenWidth + 'px'
      }
	}
</script>
<style lang="scss">
	  nav {
    height: 3rem;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #71d4a1;
    z-index: 1000;
    box-shadow: 0 0 1rem rgba(0,0,0,0.2);
    h3{
      position: absolute; 
      color: #fff;
      left: 50%;
      transform: translate(-50%);
      margin: 0;
      line-height: 3rem;
      user-select: none;
      font-weight: normal;
    }
    .nav-left{
      float: left;
      height: 100%;
      display: inline-block;
      line-height: 3rem;
      padding-left: 1rem;
      font-size: 1.2rem;
      color: #fff;  
      width: 1.5rem;
      background: url('../assets/left.png');
      background-repeat: no-repeat;
      background-position: 1rem 0.8rem;
      background-size: 70% 45%;
    }
    .nav-right{
      float: right;
      height: 100%;
      display: inline-block;
      padding-right: 1rem;
      font-size: 1.5rem;
      color: #fff; 
      width: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        display: block;
        width: 100%;
        height: 0.15rem;
        background-color: #fff;
        line-height: -5rem;
        margin-top: 0.3rem;
      }
      span:first-child {
        margin-top: 0;
      }
    }
  }
</style>