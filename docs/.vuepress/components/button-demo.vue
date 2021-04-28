<template>
  <div>
    <m-button>默认按钮</m-button>
    <m-button icon="settings">带图标按钮</m-button>
    <m-button :loading="true">加载状态按钮</m-button>
    <m-button disabled>禁用按钮</m-button>
  </div>
</template>

<script>
import Button from '../../../src/button'
export default {
  components: {
    'm-button': Button
  },
}
</script>