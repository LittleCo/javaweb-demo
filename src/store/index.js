import Vue from 'vue'
import Vuex from 'vuex'

import member from './modules/member'
// load Vuex
Vue.use(Vuex)

const state = {}

// Create Store
const store = new Vuex.Store({
  modules: {
    member
  }
})

export default store
