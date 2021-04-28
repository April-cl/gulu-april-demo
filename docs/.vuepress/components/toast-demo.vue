<template>
  <div>
    <g-button @click="$toast('我是 toast 内容，我默认在3秒后自动关闭。')">点我从上方弹出，并自动关闭</g-button>
    <br>
    <g-button @click="onClickButton">点我从下方弹出，且不自动关闭</g-button>
  </div>
</template>
<script>
import Vue from 'vue'
import Button from '../../../src/Button'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
  components: {
    'g-button': Button
  },
  methods: {
    onClickButton() {
      this.$toast('我是 toast 内容，请看控制台打印的回调函数', {
        autoClose: false,
        position: 'bottom',
        closeButton: {
          text: '点我关闭',
          callback: function () {
            console.log('我是关闭 toast 后的回调')
          }
        }
      })
    }
  }
}
</script>