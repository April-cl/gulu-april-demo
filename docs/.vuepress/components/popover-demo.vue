<template>
  <div>
    <m-popover>
      <m-button>点我弹出气泡卡片</m-button>
      <template slot="content">我是气泡卡片</template>
    </m-popover>
    <br>
    <m-popover trigger="hover">
      <m-button>摸我弹出气泡卡片（鼠标移入）</m-button>
      <template slot="content">我是气泡卡片</template>
    </m-popover>
    <br>
    <m-popover position="right">
      <m-button>点我从右边弹出气泡卡片</m-button>
      <template slot="content">我是气泡卡片</template>
    </m-popover>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  components: {
    'm-popover': Popover,
    'm-button': Button
  }
}
</script>