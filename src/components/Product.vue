<template>
  <table class="table table-hover product-table text-left">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productlist" track-by="id">
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>{{product.price}}:-</td>
      </tr>
      <tr v-if="!productlist.length">
        <td colspan="4" class="p-y-3 text-xs-center">
          <strong>You should add some products!</strong>
        </td>
      </tr>
    </tbody>
  </table>
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
