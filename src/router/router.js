import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '@/components/Catalog'
import Cart from '@/components/Cart'
import Select from '@/components/Select'

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
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    }
  ]
})

export default router
