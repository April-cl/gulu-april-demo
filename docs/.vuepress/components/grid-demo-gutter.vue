<template>
  <div>
    <m-row class="demoRow" gutter="10">
      <m-col span="8">
        <div class="demoCol">gutter-10</div>
      </m-col>
      <m-col span="8">
        <div class="demoCol">gutter-10</div>
      </m-col>
      <m-col span="8">
        <div class="demoCol">gutter-10</div>
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