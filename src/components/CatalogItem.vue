<template>
  <div class="catalog-item">
    <img class="catalog-item__image" :src=" require('../assets/' + product_data.image) ">
    <p class="catalog-item__name">Name: {{ product_data.name }} </p>
    <p class="catalog-item__price">Price: {{ product_data.price }} <strong>P</strong> </p>
    <Button @click="addToCart">Add to cart</Button>
  </div>
</template>

<script>
import Button from '../components/Button'
export default {
  name: 'CatalogItem',
  components: {
    Button
  },
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    addToCart () {
      this.$emit('add-to-cart', this.product_data)
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-item {
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
    &__image {
      width: 200px;
      height: 250px;
    }
}
</style>
