<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
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
    positionContent () {
      const contentWrapper = this.$refs.contentWrapper
      document.body.appendChild(contentWrapper)
      const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      contentWrapper.style.left = left + window.scrollX + 'px'
      contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument (e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return
      }
      this.close()
    },
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
  background: white;
  transform: translateY(-100%);
  margin-top: -10px;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>