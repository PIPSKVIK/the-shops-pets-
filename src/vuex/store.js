import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => { // Нужно сделать так, чтобы при добавлении карточки они не добавлялись повторно, а просто изменялось колличество, типо quantity
      if (state.cart.length) {
        let isProductExists = false
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => { // это у нас будет удалять карточку из state.cart.
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => { // ++++++++++++++++++++++++ quantity
      state.cart[index].quantity++
    },
    DECRIMENT: (state, index) => { // ----------------------- quantity
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API ({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'Get'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART ({ commit }, product) {
      commit('SET_CART', product)
    },
    DELITE_FROM_CART ({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM ({ commit }, index) { // ++++++++++++++
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM ({ commit }, index) { // --------------
      commit('DECRIMENT', index)
    }
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    },
    CART (state) {
      return state.cart
    }
  }
})

export default store
