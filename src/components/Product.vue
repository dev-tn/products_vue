<template>
  <section>
    <save-product-form :product="productInForm"></save-product-form>
    <table class="table table-hover product-table text-left">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="product in productlist" track-by="id" v-on:click.prevent="onEdit(product)">
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
  </section>
</template>

<script>
  import { http } from 'vue'
  import saveProductForm from './SaveProductForm'

  export default {
    name: 'product',
    components: {
      saveProductForm
    },
    data () {
      return {
        pageHeading: 'Product List',
        productlist: [],
        productInForm: {
          id: null,
          name: '',
          description: '',
          price: null
        }
      }
    },
    created () {
      var _this = this
      http.get('products').then(function (response) {
        _this.productlist = response.body.data
      })
    },
    methods: {
      onEdit (product) {
        this.productInForm = product
      }
    }
  }
</script>
