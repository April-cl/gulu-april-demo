<template>
  <div>
    <div>
      <h2>我是横向标签页</h2>
      <m-tabs :selected.sync="selectedTab">
        <m-tabs-head>
          <m-tabs-item name="1">标签1</m-tabs-item>
          <m-tabs-item name="2" disabled>标签2</m-tabs-item>
          <m-tabs-item name="3">标签3</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="1">内容1</m-tabs-pane>
          <m-tabs-pane name="2">内容2</m-tabs-pane>
          <m-tabs-pane name="3">内容3</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    </div>
    <div>
      <h2>我是纵向标签页</h2>
      <m-tabs :selected.sync="selectedTab" direction="vertical">
        <m-tabs-head>
          <m-tabs-item name="1">标签1</m-tabs-item>
          <m-tabs-item name="2">标签2</m-tabs-item>
          <m-tabs-item name="3">标签3</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="1">内容1</m-tabs-pane>
          <m-tabs-pane name="2">内容2</m-tabs-pane>
          <m-tabs-pane name="3">内容3</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
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
    'm-tabs': Tabs,
    'm-tabs-body': TabsBody,
    'm-tabs-head': TabsHead,
    'm-tabs-item': TabsItem,
    'm-tabs-pane': TabsPane
  },
  data() {
    return {
      selectedTab: '1'
    }
  }
}
</script>