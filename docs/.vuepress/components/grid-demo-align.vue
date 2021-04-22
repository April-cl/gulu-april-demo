<template>
  <div>
    <g-row class="demoRow" gutter="10" align="left">
      <g-col span="8">
        <div class="demoCol">1 align-left</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">2 align-left</div>
      </g-col>
    </g-row>

    <g-row class="demoRow" gutter="10" align="center">
      <g-col span="8">
        <div class="demoCol">1 align-center</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">2 align-center</div>
      </g-col>
    </g-row>

    <g-row class="demoRow" gutter="10" align="right">
      <g-col span="8">
        <div class="demoCol">1 align-right</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">2 align-right</div>
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