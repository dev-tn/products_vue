<template>
  <section>
    <save-product-form :product="productInForm" v-on:submit="onFormSave" v-on:cancel="resetProductInForm"></save-product-form>
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
  import uuid from 'uuid'
  import { http } from 'vue'
  import saveProductForm from './SaveProductForm'

  const initialData = () => {
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
  }

  export default {
    name: 'product',
    components: {
      saveProductForm
    },
    data: initialData,
    created () {
      var _this = this
      http.get('products').then(function (response) {
        _this.productlist = response.body.data
      })
    },
    methods: {
      onFormSave (product) {
        var _this = this
        const index = this.productlist.findIndex((p) => p.id === product.id)
        // update product if it exists or create it if it doesn't
        if (index !== -1) {
          http.put(`products/${product.id}`, product).then(function (response) {
            _this.productlist.splice(index, 1, response.body.data)
          })
        } else {
          product.id = uuid.v4()
          http.post('products', product).then(function (response) {
            _this.productlist.push(response.body.data)
          })
        }
        this.resetProductInForm()
      },
      onEdit (product) {
        this.productInForm = product
      },
      resetProductInForm () {
        this.productInForm = initialData().productInForm
      }
    }
  }
</script>
