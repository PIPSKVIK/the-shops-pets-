<template>
  <div class="cart">
    <router-link
      :to="{name: 'catalog'}"
      class="cart__link-catalog"
    >
      Back to Catalog
    </router-link>
    <div v-if="!cart_data.length">
      <p class="cart__no-products">No products...</p>
      <img src="../assets/cart.jpg" width="100" height="100">
    </div>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @delete-from-cart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    ></CartItem>
    <div class="cart__total-wrapper">
      <p class="cart__total">Total:</p>
      <p class="cart__total-price"> {{ cartTotalConst }} Р</p>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'
import { mapActions } from 'vuex'
export default {
  name: 'Cart',
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELITE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    deleteFromCart (index) {
      this.DELITE_FROM_CART(index)
    },
    increment (index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement (index) {
      this.DECREMENT_CART_ITEM(index)
    }
  },
  computed: {
    cartTotalConst () {
      let result = []
      if (this.cart_data.length) {
        for (const item of this.cart_data) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.cart__total-wrapper {
  color: white;
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  padding: 10px 30px;
  background: rgb(22, 22, 22);
  border-radius: 15px 0 15px 0;
}

.cart__no-products {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  line-height: 1;
  font-weight: 700;
  font-style: italic;
}

.cart {
  margin-top: 30px;
}

.cart-title {
  position: relative;
  margin-bottom: 50px;
  &::after {
    content: '';
    position: absolute;
    width: 550px;
    height: 2px;
    background: rgb(44, 38, 34);
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.cart__link-catalog {
  position: fixed;
  top: 20px;
  left: 20px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-style: italic;
  padding: 10px;
  background: rgba(46, 42, 42, 0.75);
  border-radius: 0 20px 0 20px;
    &:hover {
      border-radius: 20px 0 20px 0;
      transition: 0.5s;
    }
    &:active {
      background: rgba(46, 42, 42, 0.35);
    }
}
</style>
