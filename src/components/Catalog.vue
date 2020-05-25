<template>
  <section>
    <div>
      <h2>Catalog</h2>
      <router-link :to="{name: 'cart', params: {cart_data: CART} }">
        <div class="catalog__link-cart">Cart: {{ CART.length }}</div>
      </router-link>
    </div>
    <div class="catalog">
      <CatalogItem
        v-for="product of PRODUCTS"
        :key="product.article"
        :product_data="product"
        @add-to-cart="addToCart"
      ></CatalogItem>
    </div>
  </section>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Catalog',
  components: {
    CatalogItem
  },
  data: () => ({
  }),
  methods: {
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ])
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Данные получены!')
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
}

.catalog__link-cart {
  position: fixed;
  padding: 15px;
  top: 20px;
  right: 20px;
  border-radius: 20px 0 20px 0;
  background: rgba(26, 24, 24, 0.75);
  color: white;
  cursor: pointer;
    &:hover {
      border-radius: 0 20px 0 20px;
      transition: 0.5s;
    }

    &:active {
      background: rgba(26, 24, 24, 0.35);
    }
}
</style>
