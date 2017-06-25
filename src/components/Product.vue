<template>
  <section>
    <save-product-form :product="productInForm" v-on:submit="onFormSave" v-on:cancel="resetProductInForm"></save-product-form>
    <table class="table table-hover product-table text-left">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productlist" track-by="id" v-on:click.prevent="onEdit(product)">
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>{{product.price}}:-</td>
          <td><a href="#" v-on:click.prevent.stop="onRemove(product)">remove</a></td>
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
  import { mapGetters, mapActions } from 'vuex'
  import saveProductForm from './SaveProductForm'

  const initialData = () => {
    return {
      pageHeading: 'Product List',
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
    computed: mapGetters({
      productlist: 'getProducts'
    }),
    data: initialData,
    methods: {
      ...mapActions([
        'saveProduct',
        'deleteProduct'
      ]),
      onFormSave (product) {
        this.saveProduct(product)
        this.resetProductInForm()
      },
      onEdit (product) {
        this.productInForm = product
      },
      onRemove (product) {
        this.deleteProduct(product)
      },
      resetProductInForm () {
        this.productInForm = initialData().productInForm
      }
    }
  }
</script>
