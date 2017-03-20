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
        <keep-alive include="Home">
          <router-view v-on:navName="changeNavName"></router-view>
        </keep-alive>
      </transition>
      <SendMessage v-if="sendBlock"></SendMessage>
      <PictureView :show="pictureView"></PictureView>
  </div>
</template>
<script>
import Loading from './components/Loading'
import Sidebar from './components/Sidebar'
import SendMessage from './components/SendMessage'
import Navs from './components/Navs'
import store from './vuex'
import Alert from './components/Alert'
import PictureView from './components/PictureView'
import util from './util'
import gestureBack from './util/gestureBack'
export default {
  components:{
    Sidebar,
    SendMessage,
    Navs,
    Alert,
    PictureView,
    Loading
  },
  mixins: [gestureBack],
  data: function() {
    return {
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
    alertShow () {
      return this.$store.getters.delAlertStatus
    },
    sideShow () {
      return this.$store.getters.sideShow
    },
    sideList () {
      return this.$store.getters.sideList
    },
    pictureView () {
      return this.$store.getters.pictureView
    },
    sendBlock () {
      return this.$store.getters.sendBlock
    },
    direction () {
      return this.$store.getters.fadeDirection
    },
    loadingStatus () {
      return this.$store.getters.loadingStatus
    },
    hash () {
      let flag = (this.$route.fullPath === '/' || this.$route.fullPath === '/home' )?true : false
      return !flag
    },
    navShow () {
      return this.$store.getters.navShow
    },
    sideBarPicture () {
      return this.$store.getters.sideBarPicture
    },
    navName () {
      return this.$store.getters.navName
    }
  },
  store,
  created () {
    this.$store.dispatch('getFriendShipList')
    this.$store.dispatch('getAllList')
  },
  methods: {
    changeNavName (val) {
      this.navName = val
    },
    hide () {
      this.$store.dispatch('changeSidebar')
    },
    copy () {
        this.$store.dispatch('changeDelAlert', false)
    },
    deleteComment () {
      this.$store.dispatch('changeDelAlert', false)
      this.$store.dispatch('deleteComment')
    },
  },
  mounted () {
    // util.gestureBack(this)
  }
}
</script>

<style lang="scss">

body,html{
  margin: 0;
  height: 100%;
  overflow: hidden;
  // background-color: #3c3c3c;
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
    transform: translate3d(0,0,0);
  }
  .right-to-left-fade-enter {
  transform: translate3d(120%, 0, 0);
  opacity: 0;
  }
  .right-to-left-fade-enter-active {
    transition: all 0.8s cubic-bezier(.36, .66, .04, 1);
  }
  .right-to-left-fade-leave-active{
    transition: all 0.8s cubic-bezier(.36, .66, .04, 1);
  }
  .right-to-left-fade-leave-active {
    opacity: 0.2;
  }

  .left-to-right-fade-enter {
    opacity: 0.2;
  }
  .left-to-right-fade-enter-active ,.left-to-right-fade-leave-active{
    transition: all 1.5s cubic-bezier(.36, .66, .04, 1);
  }
  .left-to-right-fade-leave-active {
    transform: translate3d(120%, 0, 0);
    z-index: 100;
  }
  .container::-webkit-scrollbar{
    width: 0px;
  }
}

@media screen and (min-width: 880px) {
    body {
        background-color:#3c3c3c;
        #app {
          .container {
            left: 50%;
            transform: translateX(-50%);
          }
        }
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
