<template>
  <div>
    <g-popover>
      <g-button>点我弹出气泡卡片</g-button>
      <template slot="content">我是气泡卡片</template>
    </g-popover>
    <br>
    <g-popover trigger="hover">
      <g-button>摸我弹出气泡卡片（鼠标移入）</g-button>
      <template slot="content">我是气泡卡片</template>
    </g-popover>
    <br>
    <g-popover position="right">
      <g-button>点我从右边弹出气泡卡片</g-button>
      <template slot="content">我是气泡卡片</template>
    </g-popover>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  components: {
    'g-popover': Popover,
    'g-button': Button
  }
}
</script>