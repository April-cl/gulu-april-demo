<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class='{[`position-${position}`]:true}'>
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "MochaUIPopover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0;
      }
    }
  },
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
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - contentWrapper.getBoundingClientRect().height) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - contentWrapper.getBoundingClientRect().height) / 2,
          left: left + width + window.scrollX
        },
      }
      contentWrapper.style.top = positions[this.position].top + 'px'
      contentWrapper.style.left = positions[this.position].left + 'px'
    },
    onClickDocument (e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return
      }
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
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
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
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
  padding: 4px;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
  background: white;
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
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      top: 100%;
      border-bottom: none;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
      border-bottom: none;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      bottom: 100%;
      border-top: none;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
      border-top: none;
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before, &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: black;
      left: 100%;
      border-right: none;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
      border-right: none;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      right: 100%;
      border-left: none;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
      border-left: none;
    }
  }
}
</style>