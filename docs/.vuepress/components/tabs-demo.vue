<template>
  <div>
    <div>
      <h2>我是横向标签页</h2>
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
          <g-tabs-item name="1">标签1</g-tabs-item>
          <g-tabs-item name="2" disabled>标签2</g-tabs-item>
          <g-tabs-item name="3">标签3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="1">内容1</g-tabs-pane>
          <g-tabs-pane name="2">内容2</g-tabs-pane>
          <g-tabs-pane name="3">内容3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div>
      <h2>我是纵向标签页</h2>
      <g-tabs :selected.sync="selectedTab" direction="vertical">
        <g-tabs-head>
          <g-tabs-item name="1">标签1</g-tabs-item>
          <g-tabs-item name="2">标签2</g-tabs-item>
          <g-tabs-item name="3">标签3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="1">内容1</g-tabs-pane>
          <g-tabs-pane name="2">内容2</g-tabs-pane>
          <g-tabs-pane name="3">内容3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsBody from '../../../src/tabs-body'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'

export default {
  components: {
    'g-tabs': Tabs,
    'g-tabs-body': TabsBody,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane
  },
  data() {
    return {
      selectedTab: '1'
    }
  }
}
</script>