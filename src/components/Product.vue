<template>
  <div>
    <h2>{{ pageHeading }}</h2>
    <ul>
     <li v-for="product in productlist" track-by="id">
      {{ product.name }}
    </li>
  </ul>
</div>
</template>

<script>
  import { http } from 'vue'
  export default {
    name: 'product',
    data () {
      return {
        pageHeading: 'Product List',
        productlist: []
      }
    },
    created () {
      var _this = this
      http.get('products').then(function (response) {
        _this.productlist = response.body.data
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
