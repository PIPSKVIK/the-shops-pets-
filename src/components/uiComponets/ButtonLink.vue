<template>
  <span class="button-link">
    <slot>Button</slot>
  </span>
</template>

<script>
export default {
  name: 'ButtonLink'
}
</script>

<style lang="scss" scoped>
.button-link {
  color: white;
  padding: 12px;
  font-size: 18px;
  line-height: 0.7;
  font-style: italic;
  background: rgba(14, 13, 13, 0.75);
  border-radius: 15px 0 15px 0;
    &:hover {
      border-radius: 0 15px 0 15px;
      transition: 0.7s;
    }

    &:active {
      background: rgba(14, 13, 13, 0.45);
    }
}
</style>
