<template>
  <div class="cart-item">
    <img class="cart-item__image" :src=" require('../assets/' + cart_item_data.image) ">
    <div>
      <p> {{ cart_item_data.name }} </p>
      <p> {{ cart_item_data.price }} </p>
      <p> {{ cart_item_data.article }} </p>
    </div>
    <div class="cart-item__quantity">
      <p>Quantity: {{ cart_item_data.quantity }} </p>
      <div>
        <button class="catalog-item__button" @click="decrementItem">-</button>
        <button class="catalog-item__button" @click="incrementItem">+</button>
      </div>
    </div>
    <Button @click="deleteFromCart">
      <template>Delete</template>
    </Button>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'CartItem',
  components: {
    Button
  },
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart () {
      this.$emit('delete-from-cart')
    },
    decrementItem () {
      this.$emit('decrement')
    },
    incrementItem () {
      this.$emit('increment')
    }
  },
  mounted () {
    this.$set(this.cart_item_data, 'quantity', 1) // будет добавлять еще одно поле в массив (1-это куда будем добавлять, 2- как будет называтся ключ, 3- сколько добавлять)
  }
}
</script>

<style lang="scss" scoped>
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
  }

  .cart-item__image {
    width: 80px;
    height: 100px;
    border-radius: 10px 0 10px 0;
  }

  .catalog-item__button {
    color: white;
    cursor: pointer;
    margin-right: 10px;
    width: 30px;
    outline: none;
    border: none;
    background: rgb(20, 20, 20);
    padding: 5px 0;
    border-radius: 10px 0 10px 0;
      &:active {
        background: rgba(20, 20, 20, 0.50);
      }
  }
</style>
