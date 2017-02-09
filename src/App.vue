<template>
  <div id="app">
      <Sidebar></Sidebar>
      <Alert></Alert>
      <transition :name="direction">
        <router-view></router-view>
      </transition>
      <SendMessage v-if="sendBlock"></SendMessage>
      <PictureView v-if="pictureView"></PictureView>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import SendMessage from './components/SendMessage'
import Navs from './components/Navs'
import store from './vuex'
import Alert from './components/Alert'
import PictureView from './components/PictureView'
export default {
  components:{
    Sidebar,
    SendMessage,
    Navs,
    Alert,
    PictureView
  },
  computed: {
    pictureView: function() {
      return this.$store.getters.pictureView
    },
    sendBlock: function() {
      return this.$store.getters.sendBlock
    },
    direction: function() {
      return this.$store.getters.fadeDirection
    },
    hash: function() {
      let flag = (this.$route.fullPath === '/' || this.$route.fullPath === '/home')?true : false
      return !flag
   }
  },
  store,
  created: function() {

  },
  mounted: function() {
    let start,end,self = this
    let screenWidth = window.screen.width
    document.addEventListener('touchstart', function(e) {
      start = e.changedTouches[0].pageX
    }, false)
    document.addEventListener('touchend', function(e) {
      end = e.changedTouches[0].pageX
      if( (-(start - end)/screenWidth) >= 0.23 && self.hash) {
        self.$store.dispatch('changeDirection', 'left-to-right-fade')
        window.history.back()
      }
    }, false)
  }
}
</script>

<style lang="scss">
body,html{
  margin: 0;
  height: 100%;
}
.right-to-left-fade-enter {
  transform: translate(120%);
  opacity: 0;
}
.right-to-left-fade-enter-active ,.right-to-left-fade-leave-active{
  transition: all .3s;
}
.right-to-left-fade-leave-active {
  opacity: 0.2;
}

.left-to-right-fade-enter {
  opacity: 0.2;
}
.left-to-right-fade-enter-active ,.left-to-right-fade-leave-active{
  transition: all .3s;
}
.left-to-right-fade-leave-active {
  transform: translate(120%);
  z-index: 100;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .clearfix:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden
  }
  .clearfix{
    height:1%;
  }
  a {
    text-decoration: none;
  }
  .container {
    // margin-top: 4rem;
    position: absolute;
    top: 0;
    background-color: #fff;
    min-height: 100%;
    box-shadow: 0 0 2rem 1rem rgba(0,0,0,0.2);
    height: 100%;
    overflow-y: scroll;
  }
  .container::-webkit-scrollbar{
    width: 0px;
  }
}
</style>
