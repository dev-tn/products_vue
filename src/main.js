import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueResource from 'vue-resource'

// Add vue-resource as middleware to Vue.
Vue.use(VueResource)

// set the API root so we can use relative url's in our actions.
Vue.http.options.root = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  render: h => h(App)
})

// render: h => h(App)
// render: (function (h) {
//   return h(App);
// });
