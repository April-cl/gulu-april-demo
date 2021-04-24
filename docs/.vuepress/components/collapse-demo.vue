<template>
  <div>
    <div>
      <h4>单选面板</h4>
      <g-collapse :selected.sync="selected1" single>
        <g-collapse-item title="我是标题1" name="单选面板1">我是单选面板1</g-collapse-item>
        <g-collapse-item title="我是标题2" name="单选面板2">我是单选面板2</g-collapse-item>
        <g-collapse-item title="我是标题3" name="单选面板3">我是单选面板3</g-collapse-item>
      </g-collapse>
    </div>
    <div>
      <h4>多选面板</h4>
      <g-collapse :selected.sync="selected2">
        <g-collapse-item title="我是标题1" name="多选面板1">我是多选面板1</g-collapse-item>
        <g-collapse-item title="我是标题2" name="多选面板2">我是多选面板2</g-collapse-item>
        <g-collapse-item title="我是标题3" name="多选面板3">我是多选面板3</g-collapse-item>
      </g-collapse>
    </div>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem
  },
  data() {
    return {
      selected1: ['单选面板1'],
      selected2: ['多选面板1', '多选面板2']
    }
  }
}
</script>