<template>
  <div class="tabs" :class='{[`direction-${direction}`]:true}'>
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'MochaUITabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
      direction: this.direction
    }
  },
  methods: {
    checkChildren () {
      if (this.$children.length === 0) {
        console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-body，但你没有写子组件')
      }
    },
    selectTab () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'MochaUITabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'MochaUITabsItem' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  },
  mounted() {
    this.checkChildren()
    this.selectTab()
  }
}
</script>
<style lang="scss">
.tabs {
  display: flex;
  &.direction-horizontal {
    flex-direction: column;
  }
  &.direction-vertical {
    flex-direction: row;
  }
}
</style>