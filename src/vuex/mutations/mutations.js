export default {
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
}
