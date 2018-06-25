<template>
  <v-container fluid style="margin-top: 37.2%">
    <v-layout align-center>
      <v-flex 6 text-xs-center>
        <v-form v-model="valid">
          <v-text-field
            label="晶棒编号"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <div>
            <v-btn block
                   color="blue darken-1"
                   @click="checkCode"
                   dark>查询编号
            </v-btn>
          </div>
        </v-form>
        <div id="scan" style="margin-top: 10%">
          <v-btn block
                 color="blue darken-1"
                 @click="scanCode"
                 dark>扫描二维码
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // import wx from 'weixin-js-sdk'
  // import globalVar, {transformToClient} from "./project-component/GlobalVarFun";
  export default {
    name: "InputCode",
    data() {
      return {
        valid: false,
        name: null,
        nameRules: [
          v => !!v || '请正确填写晶棒编号',
          v => v.length <= 10 || '请正确填写晶棒编号'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
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

            let reg = "\"(.*)\""
            self.name = JSON.stringify(res["resultStr"]).match(reg)[1]

            param.append("id", self.name)
            // alert(state.productCode);
            self.$store.commit('SET_productCode', self.name)
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

      checkCode() {
        // console.log(888)
        let self = this
        let param = new URLSearchParams()
        self.$store.commit('SET_productCode', self.name)
        /*
        let reg = "\"(.*)\""
        globalVar.productCode = JSON.stringify(res["resultStr"]).match(reg)[1]
        param.append("id", globalVar.productCode)
        */
        param.append("id", self.name)
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

      // scanAndProcess() {
      //     wx.scanQRCode({
      //         desc: 'scanQRCode desc',
      //         success: function (res) {
      //             alert(JSON.stringify(res));
      //         }
      //     })
      // }
    }
  }
</script>

<style scoped>

</style>
