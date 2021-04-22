<template>
  <div>
    <g-row class="demoRow">
      <g-col span="24">
        <div class="demoCol">default</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="24" :ipad="{span:16}">
        <div class="demoCol">ipad</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="24" :narrow-pc="{span:12}">
        <div class="demoCol">narrow-pc</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="24" :pc="{span:8}">
        <div class="demoCol">pc</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="24" :wide-pc="{span:4}">
        <div class="demoCol">wide-pc</div>
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