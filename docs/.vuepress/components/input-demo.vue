<template>
  <div>
    <g-input value="输入内容"></g-input>
    <br>
    <g-input disabled value="禁用状态"></g-input>
    <br>
    <g-input readonly value="只读状态"></g-input>
    <br>
    <g-input error="发生错误" value="错误文本"></g-input>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components: {
    'g-input': Input
  }
}
</script>