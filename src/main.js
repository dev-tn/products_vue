import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

// Add vue-resource as middleware to Vue.
Vue.use(VueResource)

// set the API root so we can use relative url's in our actions.
Vue.http.options.root = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
