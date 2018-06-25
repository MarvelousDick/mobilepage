<template>
  <div>
    <router-view></router-view>
    <div id="bottom-icon">
      <bottomicon></bottomicon>
    </div>
  </div>
</template>

<script>
  // import wx from 'weixin-js-sdk'
  import bottomicon from '@/components/projectcomponent/BottomIcon.vue'

  export default {

    name: "yf-main",

    components: {
      'bottomicon': bottomicon
    },

    data() {
      return {}
    },

    created() {
      this.$store.dispatch('getJssdkFromServer')
      let userIdParam = new URLSearchParams()
      userIdParam.append("user_id", "1")
      this.$store.dispatch('getUserRight', userIdParam)
      // console.log(666)
      // console.log(this.$store.getters.getRoot)
    },

    mounted() {
      // console.log(globalVar.apiRoot)
    },

    methods: {}

  }
</script>

<style scoped>
  html, body {
    height: 100%;
  }

  #scan {
    margin-top: 10%;
  }

  #content {
    margin-bottom: 15%;
  }

  #bottom-bar {
    /*height: max-content;*/
    height: 500px;
    position: fixed;
    width: 100%;
  }

  a {
    text-decoraction: none;
    width: 33.33%;
    color: black;
  }

  /*#bottom-icon{*/
  /*position: absolute;*/
  /*}*/
  #content {
    height: 100%;
  }

</style>
