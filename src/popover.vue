<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data () {
    return {
      visible: false
    }
  },
  methods: {
    xxx () {
      this.visible = !this.visible
      if (this.visible) {
        this.$nextTick(() => {
          const contentWrapper = this.$refs.contentWrapper
          document.body.appendChild(contentWrapper)
          const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
          contentWrapper.style.left = left + window.scrollX + 'px'
          contentWrapper.style.top = top + window.scrollY + 'px'
          let eventHandle = () => {
            this.visible = false
            document.removeEventListener('click', eventHandle)
          }
          document.addEventListener('click', eventHandle)
        })
      } else {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  transform: translateY(-100%);
}
</style>