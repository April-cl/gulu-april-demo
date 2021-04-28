<template>
  <div>
    <m-layout style="color: white; margin-bottom:50px;">
      <m-header style="height: 50px; background:lightskyblue;">header</m-header>
      <m-content style="height: 100px; background:deepskyblue;">content</m-content>
      <m-footer style="height: 50px; background:lightskyblue;">footer</m-footer>
    </m-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

export default {
  components: {
    'm-layout': Layout,
    'm-header': Header,
    'm-content': Content,
    'm-footer': Footer
  },
}
</script>