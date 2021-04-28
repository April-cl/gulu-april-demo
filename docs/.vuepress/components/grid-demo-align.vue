<template>
  <div>
    <m-row class="demoRow" gutter="10" align="left">
      <m-col span="8">
        <div class="demoCol">1 align-left</div>
      </m-col>
      <m-col span="8">
        <div class="demoCol">2 align-left</div>
      </m-col>
    </m-row>

    <m-row class="demoRow" gutter="10" align="center">
      <m-col span="8">
        <div class="demoCol">1 align-center</div>
      </m-col>
      <m-col span="8">
        <div class="demoCol">2 align-center</div>
      </m-col>
    </m-row>

    <m-row class="demoRow" gutter="10" align="right">
      <m-col span="8">
        <div class="demoCol">1 align-right</div>
      </m-col>
      <m-col span="8">
        <div class="demoCol">2 align-right</div>
      </m-col>
    </m-row>
  </div>
</template>

<script>
import Col from '../../../src/Col'
import Row from '../../../src/Row'
export default {
  components: {
    'm-col': Col,
    'm-row': Row
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