<template>
  <m-button-group>
    <m-button icon="left">上一页</m-button>
    <m-button icon="right" icon-position="right">下一页</m-button>
  </m-button-group>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
  components: {
    'm-button': Button,
    'm-button-group': ButtonGroup
  },
}
</script>