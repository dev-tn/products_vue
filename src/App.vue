<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <product></product>
  </div>
</template>

<script>
import product from './components/Product'

export default {
  name: 'app',
  components: {
    product
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
