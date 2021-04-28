<template>
  <div>
    <m-input value="输入内容"></m-input>
    <br>
    <m-input disabled value="禁用状态"></m-input>
    <br>
    <m-input readonly value="只读状态"></m-input>
    <br>
    <m-input error="发生错误" value="错误文本"></m-input>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components: {
    'm-input': Input
  }
}
</script>