import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../components/Catalog'
import Cart from '../components/Cart'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      props: true
    }
  ]
})

export default router
