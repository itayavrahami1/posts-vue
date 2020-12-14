<template>
  <div id="app" class="main-container">
    <navbar />
    <user-msg :msg="userMsg"/>
    <router-view />
  </div>
</template>

<script>
import navbar from '@/cmps/navbar.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
  computed: {
    userMsg(){
      return this.$store.getters.msgToShow
    }
  },
  components: {
    navbar,
    UserMsg
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
