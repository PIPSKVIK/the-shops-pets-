<template>
  <button
    class="button"
    type="button"
    v-bind="$attrs"
    :value="value"
    v-on="inputListeners"
  >
    <slot>&times;</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['label', 'value'],
  computed: {
    inputListeners () {
      return Object.assign({},
        this.$listeners,
        {
          input (event) {
            this.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  outline: none;
  border: 1px solid black;
  background: transparent;
  border-radius: 8px;
  padding: 8px;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
    &:hover {
      color: white;
      background: black;
    }
    &:active {
      background: rgb(83, 80, 80);
      border-color: rgb(83, 80, 80);
    }
}
</style>
