import * as actions from './actions'
import * as getters from './getters'

import {
  FETCH_PRODUCTS
} from './mutation-types'

// initial state
const initialState = {
  all: []
}

// mutations
const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    // assign the products that we got from our FETCH_PRODUCTS event to state.all
    state.all = products
  }
}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
