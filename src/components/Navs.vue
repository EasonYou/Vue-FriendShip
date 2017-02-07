<template>
	<nav>
	    <span class="nav-left" v-on:click="back">back</span>
	    <h3>{{ navDesc }}</h3>
	    <span class="nav-right" v-on:click="change">=</span>
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
  	      this.$store.dispatch('changeSide')
  	    },
        back:function() {
          if(this.hash) {
            this.$store.dispatch('changeDirection', 'left-to-right-fade')
            window.history.back();
          }
        }
  	  }
	}
</script>
<style lang="scss">
	  nav {
    height: 4rem;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #71d4a1;
    z-index: 1000;
    h3{
      position: absolute; 
      color: #fff;
      left: 50%;
      transform: translate(-50%);
      margin: 0;
      line-height: 4rem;
    }
    .nav-left{
      float: left;
      height: 100%;
      display: inline-block;
      line-height: 4rem;
      padding-left: 1rem;
      font-size: 1.2rem;
      color: #fff;  
    }
    .nav-right{
      float: right;
      height: 100%;
      display: inline-block;
      line-height: 4rem;
      padding-right: 1rem;
      font-size: 1.5rem;
      color: #fff;  
    }
  }
</style>