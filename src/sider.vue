<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <span class="hasCloseButton" v-if="closeButton"><button @click="visible=false">关闭</button></span>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'GuluSider',
  props: {
    closeButton: {
      type:Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>
<style lang="scss" scoped>
.sider{
  position: relative;

  .hasCloseButton button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}
.slide-enter, .slide-leave-to {
  margin-left: -200px;
}
</style>