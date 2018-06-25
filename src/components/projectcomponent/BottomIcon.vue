<template>
  <v-speed-dial
    v-model="fab"
    color="blue darken-1"
    dark
    absolute
    top
    right
    fab
    v-show="!hidden"
    style="position: fixed; top: 80%"
  >
    <v-btn
      slot="activator"
      color="blue darken-1"
      dark
      fab
      hover
      v-model="fab"
    >
      <v-icon>account_circle</v-icon>
      <v-icon>close</v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      small
      color="light-green"
      @click="back"
    >
      <v-icon>drag_handle</v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      small
      color="cyan"
      @click="scanCode"
    >
      <v-icon>crop_free</v-icon>
    </v-btn>
    <template v-if="routerName">
      <v-btn
        fab
        dark
        small
        color="teal"
        @click="modify"
      >
        <v-icon>edit</v-icon>
      </v-btn>
    </template>
  </v-speed-dial>

</template>

<script>
  // import wx from 'weixin-js-sdk'

  export default {
    name: "bottom-icon",
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
      hidden: false
    }),

    computed: {

      routerName() {
        if (this.$route.name == 'ProductDetail') {
          return true
        } else {
          return false
        }
      },

      activeFab() {
        return [
          {color: 'teal', icon: 'edit', click: 'scanCode'},
          {color: 'cyan', icon: 'crop_free', click: 'scanCode'},
          {color: 'light-green', icon: 'drag_handle', click: 'scanCode'}
        ]
        // switch (this.tabs) {
        //   case 'one':
        //     return {'class': 'purple', icon: 'account_circle'}
        //   case 'two':
        //     return {'class': 'red', icon: 'edit'}
        //   case 'three':
        //     return {'class': 'green', icon: 'keyboard_arrow_up'}
        //   default:
        //     return {}
        // }
      }
    },

    mounted() {
      // console.log(this.$route.name)
    },


    watch: {
      top(val) {
        this.bottom = !val
      },
      right(val) {
        this.left = !val
      },
      bottom(val) {
        this.top = !val
      },
      left(val) {
        this.right = !val
      }
    },

    methods: {

      scanCode() {
        let self = this
        wx.scanQRCode({
          needResult: 1,
          desc: 'scanQRCode desc',
          success: function (res) {
            let param = new URLSearchParams()
            /*
            let reg = "\"(.*)\""
            globalVar.productCode = JSON.stringify(res["resultStr"]).match(reg)[1]
            param.append("id", globalVar.productCode)
            */
            param.append("id", 1)
            // alert(state.productCode);
            self.$http({
              method: 'post',
              url: self.$store.state['CrystalStick'].root + '/yfprod/getprodetail',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
              data: param
            }).then(function (response) {
              self.$store.commit('SET_productDetailServer', JSON.parse(response.data.product))
              // self.$store.state['CrystalStick'].productDetailServer = JSON.parse(response.data.product)
              self.$store.commit('transformToClient')
              // console.log(response)
              console.log(self.$store.state['CrystalStick'].productDetailServer)
              self.$router.push({name: 'ProductDetail'})
            }).catch(function (error) {
              console.log(error)
            })
          }
        })
      },

      modify() {
        this.$router.push({name: 'ChangeValue'})
      },

      back() {
        this.$router.push({name: 'InputCode'})
      }
    }

  }
</script>

<style scoped>
  #create .speed-dial {
    position: absolute;
  }

  #create .btn--floating {
    position: relative;
  }
</style>
