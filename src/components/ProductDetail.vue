<template>
  <div>
    <v-card
      style="
                position: fixed;
                z-index: 1;
                width: 100%;
                height: 45px;
                text-align: center">
      <v-card-title v-text="productDetailServer.rod_id"></v-card-title>
    </v-card>

    <div style="padding-top: 48px; padding-bottom: 30px; z-index: 0">
      <div v-for="(item,key) in productDetailClient">
        <v-subheader style="padding-left: 24px" v-text="processNameTable[key]"></v-subheader>
        <v-data-table
          :items="productDetailClient[key]"
          class="elevation-1"
          hide-actions
          hide-headers
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right" style="align-content: left;">{{ props.item.value }}</td>
          </template>
        </v-data-table>
      </div>
    </div>

    <v-btn block
           color="blue darken-1"
           dark
           style="margin-bottom: 20px"
           :to="{name: 'ChangeValue'}"
    >修改
    </v-btn>
  </div>
</template>

<script>

  export default {
    name: "ProductDetail",
    data() {
      return {}
    },

    computed: {
      productDetailClient() {
        return this.$store.state['CrystalStick'].productDetailClient
      },
      productDetailServer() {
        return this.$store.state['CrystalStick'].productDetailServer
      },
      processNameTable() {
        return this.$store.state['CrystalStick'].processNameTable
      }
    },

    mounted() {
      // console.log(66666)
      // console.log(this.productDetail)
      // console.log(this.$route.name)
    }
  }
</script>

<style scoped>

</style>
