<template>
  <div id="app">
      <Sidebar :show="sideShow" :sideList="sideList" :picAdd="sideBarPicture" :rightSide="false" @click="hide" v-on:navName="changeNavName"></Sidebar>
      <Alert :lists="lists"
              v-on:alertDelete="deleteComment"
              v-on:alertCopy="copy"
              :show="alertShow"
              :closeDispatch="'changeDelAlert'"></Alert>
      <transition name="nav-fade">
        <Navs :nav-desc="navName" v-show="navShow"></Navs>
      </transition>
      <!-- <div class="nav-mask"></div> -->
      <transition :name="direction">
        <router-view v-on:navName="changeNavName" ></router-view>
      </transition>
      <SendMessage v-if="sendBlock"></SendMessage>
      <PictureView :show="pictureView"></PictureView>
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
  data: function() {
    return {
      navName:'',
      lists:[{
        name: '删除',
        event: 'Delete'
      }, {
        name: '复制',
        event: 'Copy'
      }]
    }
  },
  computed: {
    alertShow: function() {
      return this.$store.getters.delAlertStatus
    },
    sideShow:function() {
      return this.$store.getters.sideShow
    },
    sideList:function() {
      return this.$store.getters.sideList
    },
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
    },
    navShow: function() {
      return this.$store.getters.navShow
    },
    sideBarPicture: function() {
      return this.$store.getters.sideBarPicture
    }
  },
  store,
  methods: {
    changeNavName: function(val) {
      console.log(val)
      this.navName = val
    },
    hide: function() {
      this.$store.dispatch('changeSidebar')
    },
    copy: function() {
        this.$store.dispatch('changeDelAlert', false)
    },
    deleteComment: function() {
      console.log('sas')
      this.$store.dispatch('deleteComment')
    },
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
@media screen and (min-width: 880px) {
    body {
        background-color:#3c3c3c;
        .container {
          left: 50%;
          transform: translateX(-50%);
        }
    }
}
body,html{
  margin: 0;
  height: 100%;
  // background-color: #3c3c3c;
}
.right-to-left-fade-enter {
  transform: translate(120%);
  opacity: 0;
}
.right-to-left-fade-enter-active ,.right-to-left-fade-leave-active{
  transition: all 0.5s cubic-bezier(.36, .66, .04, 1);
}
.right-to-left-fade-leave-active {
  opacity: 0.2;
}

.left-to-right-fade-enter {
  opacity: 0.2;
}
.left-to-right-fade-enter-active ,.left-to-right-fade-leave-active{
  transition: all 0.5s cubic-bezier(.36, .66, .04, 1);
}
.left-to-right-fade-leave-active {
  transform: translate(120%);
  z-index: 100;
}
.focus {
  box-shadow: 0 0 1rem rgba(87, 180, 141,0.2);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 880px;
  .nav-fade-enter ,.nav-fade-leave-active{
    opacity: 0.7;
  }
  .nav-fade-enter-active ,.nav-fade-leave-active{
    transition: all 0.5s;
  }
  a {
    text-decoration: none;
  }
  .nav-mask {
    width: 100%;
    position: fixed;
    top: 0;
    height: 3rem;
    background-color: #fff;
    z-index: 999;
  }
  .container {
    // margin-top: 4rem;
    position: absolute;
    top: 0;
    background-color: #fff;
    min-height: 100%;
    box-shadow: 0 0 2rem 1rem rgba(0,0,0,0.3);
    height: 100%;
    overflow-y: scroll;
    max-width: 880px;
    margin: 0 auto;
  }
  .container::-webkit-scrollbar{
    width: 0px;
  }
}
</style>
<style>
  .clearfix:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .clearfix{
    *+height:1%;
  }
</style>
