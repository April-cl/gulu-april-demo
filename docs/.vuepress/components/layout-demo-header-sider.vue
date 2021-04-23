<template>
  <div>
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">header</g-header>
      <g-layout style="overflow: hidden">
        <g-sider style="background:mediumturquoise; width:200px;">sider</g-sider>
        <g-layout>
          <g-content style="height: 100px; background:deepskyblue;">content</g-content>
          <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer></g-layout>
      </g-layout>
    </g-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Sider from '../../../src/sider'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-sider': Sider,
    'g-content': Content,
    'g-footer': Footer
  },
}
</script>