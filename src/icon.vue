<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'
export default {
  name: 'MochaUIIcon',
  props:['name']
}
</script>

<style scoped>
.icon{
  width: 1em;
  height: 1em;
}
</style>