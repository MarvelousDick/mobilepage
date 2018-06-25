<template>
  <v-form v-model="valid">
    <div v-for="(value, key) in productFormJson">
      <div v-if="JSON.stringify(value) != '[]'">
        <v-subheader style="padding-left: 0px" v-text="processNameTable[key]"></v-subheader>
        <div v-for="item in value">
          <v-text-field
            :label="item.name"
            v-model="item.value"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
        </div>
      </div>
    </div>
    <v-btn
      @click="submit"
    >
      修改
    </v-btn>
    <v-btn @click="clear">清空</v-btn>
  </v-form>
</template>

<script>
  // import globalVar, {formMergeServerJson} from "./project-component/GlobalVarFun";

  export default {
    name: "ChangeValue",
    data() {
      return {
        valid: true,
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    computed: {
      productFormJson() {
        return this.$store.state['CrystalStick'].productFormJson
      },
      processNameTable() {
        return this.$store.state['CrystalStick'].processNameTable
      }
    },

    methods: {
      submit() {
        let self = this
        self.$store.commit('formMergeServerJson')
        console.log(JSON.stringify(self.$store.state['CrystalStick'].productDetailServer))
        let param = new URLSearchParams()
        param.append("update_info", JSON.stringify(self.$store.state['CrystalStick'].productDetailServer))
        self.$http({
          method: 'post',
          url: self.$store.state['CrystalStick'].root + '/yfprod/updateprod',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          data: param
        }).then(function (response) {
          // globalVar.userRight = response.data
          self.$router.push({name: 'ProductDetail'})
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })

      },
      clear() {
        this.$refs.form.reset()
      }
    },

    mounted() {
      this.$store.commit('transToFormJson', this.$store.state['UserInfo'].userRight)
    }

  }
</script>

<style scoped>

</style>
