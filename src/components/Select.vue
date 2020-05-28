<template>
  <section>
    <h2>Custom Selector (example)</h2>
    <router-link
      :to=" { name: 'catalog' } "
      class="select-catalog_link"
    >
      <ButtonLink>
        To Catalog
      </ButtonLink>
    </router-link>
    <div class="select">
      <p
        class="select-title"
        @click="optionsShow = !optionsShow"
      > {{ selected }} </p>
      <ul class="select-list" v-if="optionsShow">
        <li
          class="select-list__item"
          v-for="(option, id) in OPTIONS"
          :key="option.value"
          @click="selectOptions(option, id + 1)"
        >
          <span> {{ option.name }} </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ButtonLink from '@/components/uiComponets/ButtonLink'
import { mapGetters } from 'vuex'
export default {
  name: 'Select',
  components: {
    ButtonLink
  },
  computed: {
    ...mapGetters([
      'OPTIONS'
    ])
  },
  data: () => ({
    optionsShow: false,
    selected: 'Select options'
  }),
  methods: {
    selectOptions (option, id) {
      this.selected = option.name
      this.optionsShow = false
    },
    hideSelect () {
      this.optionsShow = false
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss" scoped>
.select-catalog_link {
  text-decoration: none;
  position: fixed;
  top: 30px;
  right: 30px;
}

.select-list {
  list-style: none;
  margin: 0;
  padding: 10px 0;
  border: 1px dotted black;
}

.select-list__item {
  margin-bottom: 10px;
  cursor: pointer;
    &:hover {
      background: rgba(12, 12, 12, 0.25);
    }
}

.select-title {
  font-size: 20px;
  line-height: 1;
  font-style: italic;
  cursor: pointer;
  border: 1px solid red;
  padding: 10px 30px;
    &:hover {
      text-decoration-color: red;
    }
}
</style>
