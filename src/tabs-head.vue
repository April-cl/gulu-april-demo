<template>
  <div class="tabs-head-wrapper" :class='{[`direction-${direction}`]:true}'>
    <div class="tabs-head" ref="head">
      <slot></slot>
      <div class="line" ref="line"></div>
      <div class="actions-wrapper">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus', 'direction'],
  mounted () {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width, top, height, left} = vm.$el.getBoundingClientRect()
        let {left: headLeft, top: headTop} = this.$refs.head.getBoundingClientRect()

        if (this.direction === 'horizontal') {
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left - headLeft}px`
        } else if (this.direction === 'vertical') {
          this.$refs.line.style.height = `${height}px`
          this.$refs.line.style.top = `${top-headTop}px`
        }
      })
    }

  }
}
</script>
<style scoped lang="scss">
$tab-horizontal-height: 40px;
$tab-vertical-height: 200px;
$blue: blue;
$border-color: #ddd;
.tabs-head-wrapper {
  display: flex;
  justify-content: flex-start;
  height: $tab-horizontal-height;
  position: relative;

  &.direction-horizontal {
    flex-direction: row;
    height: $tab-horizontal-height;
    border-bottom: 1px solid $border-color;

    .tabs-head {
      > .line {
        bottom: 0;
        border-bottom: 3px solid $blue;
      }
    }
  }
  &.direction-vertical {
    flex-direction: column;
    height: $tab-vertical-height;
    border-right: 1px solid $border-color;

    .tabs-head {
      flex-direction: column;

      > .line {
        top: 0;
        right: 0;
        border-bottom: 3px solid $blue;
        border-right: 3px solid $blue;
      }
    }
  }

  .tabs-head {
    display: flex;
    height: $tab-horizontal-height;
    position: relative;
    > .line {
      position: absolute;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
}
</style>