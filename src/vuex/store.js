import Vue from 'vue'
import Vuex from 'vuex'

import state from './state/state'
import mutations from './mutations/mutations'

import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'

import getters from './getters/getters'

const actions = { ...commonActions, ...apiRequests }

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
