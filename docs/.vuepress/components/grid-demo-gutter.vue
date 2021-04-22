<template>
  <div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">gutter-10</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">gutter-10</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">gutter-10</div>
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