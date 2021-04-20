<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">带图标按钮</g-button>
    <g-button :loading="true">加载状态按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
  </div>
</template>

<script>
import Button from '../../../src/button'
export default {
  components: {
    'g-button': Button
  },
}
</script>