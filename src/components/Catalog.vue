<template>
  <section>
    <div>
      <h2>Catalog</h2>
      <router-link
        :to=" { name: 'select' } "
        class="catalog-select__link"
      >
        <ButtonLink>
          Select
        </ButtonLink>
      </router-link>
      <router-link
        :to="{name: 'cart', params: {cart_data: CART} }"
        class="catalog-cart__link">
        <ButtonLink>
          Cart: {{ CART.length }}
        </ButtonLink>
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
import ButtonLink from '@/components/uiComponets/ButtonLink'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    ButtonLink
  },
  data: () => ({
    options: [
      {
        name: 'Options 1',
        value: 1
      },
      {
        name: 'Options 2',
        value: 2
      },
      {
        name: 'Options 3',
        value: 3
      },
      {
        name: 'Options 4',
        value: 4
      },
      {
        name: 'Options 5',
        value: 5
      }
    ]
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

  .catalog-cart__link {
    text-decoration: none;
    position: fixed;
    top: 30px;
    right: 30px;
  }

  .catalog-select__link {
    text-decoration: none;
    position: fixed;
    top: 30px;
    left: 30px;
  }
</style>
