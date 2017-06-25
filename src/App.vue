<template>
  <div id="app" class="container">
  <div class="page-header" style="overflow: hidden">
    <h1 class="col-md-10">Product Crud <small>Using vue v2.1.3 and VUEX v2.0.0</small></h1>
    <img class="pull-right" src="./assets/logo.png" style="width: 60px; margin-top: 10px">
  </div>
  <div class="clearfix"></div>
    <product></product>
  </div>
</template>

<script>
import product from './components/Product'

export default {
  name: 'app',
  components: {
    product
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
