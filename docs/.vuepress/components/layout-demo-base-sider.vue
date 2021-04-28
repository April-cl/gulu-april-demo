<template>
  <div>
    <m-layout style="color: white; margin-bottom:50px;">
      <m-header style="height: 50px; background:lightskyblue;">header</m-header>
      <m-layout>
        <m-sider style="height: 100px; background:mediumturquoise; width:200px;" close-button>sider</m-sider>
        <m-content style="height: 100px; background:deepskyblue;">content</m-content>
      </m-layout>
      <m-footer style="height: 50px; background:lightskyblue;">footer</m-footer>
    </m-layout>
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
    'm-layout': Layout,
    'm-header': Header,
    'm-sider': Sider,
    'm-content': Content,
    'm-footer': Footer
  },
}
</script>