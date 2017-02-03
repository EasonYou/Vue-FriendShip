<template>
  <div id="app">
      <Sidebar></Sidebar>
      <Navs></Navs>
      <router-view></router-view>
      <SendMessage v-if="sendBlock"></SendMessage>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import SendMessage from './components/SendMessage'
import Navs from './components/Navs'
import store from './vuex'
export default {
  components:{
    Sidebar,
    SendMessage,
    Navs
  },
  computed: {
    sendBlock: function() {
        return this.$store.getters.sendBlock
      }
  },
  store
}
</script>

<style lang="scss">
body,html{
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 4rem;
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
    // padding-top: 1px;
  }
}
</style>
