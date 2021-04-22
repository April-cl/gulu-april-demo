<template>
  <div>
    <g-row class="demoRow">
      <g-col span="8">
        <div class="demoCol">span-8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">span-8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">span-8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="6">
        <div class="demoCol">span-6</div>
      </g-col>
      <g-col span="12">
        <div class="demoCol">span-12</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">span-6</div>
      </g-col>
    </g-row>
  </div>
</template>

<script>
import Col from '../../../src/Col'
import Row from '../../../src/Row'
export default {
  components: {
    'g-col': Col,
    'g-row': Row
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>