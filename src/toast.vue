<template>
  <div class="toast">
    <div class="message">
      <slot></slot>
    </div>
  <div> | </div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default () {
        return {
          text: '知道了',
          callback: undefined
        }
      }
    }
  },
  methods: {
    onClickClose () {
      this.$el.remove()
      this.$destroy()
    }
  },
  mounted () {
    if (this.autoClose) {
      setTimeout(() => {
        this.$el.remove()
        this.$destroy()
      }, this.autoCloseDelay*1000)
    }
  }
}
</script>
<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0,0,0,0.50);
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
}
</style>