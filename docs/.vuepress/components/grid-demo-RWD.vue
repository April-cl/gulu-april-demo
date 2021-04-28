<template>
  <div>
    <m-row class="demoRow">
      <m-col span="24">
        <div class="demoCol">default</div>
      </m-col>
    </m-row>
    <m-row class="demoRow">
      <m-col span="24" :ipad="{span:16}">
        <div class="demoCol">ipad</div>
      </m-col>
    </m-row>
    <m-row class="demoRow">
      <m-col span="24" :narrow-pc="{span:12}">
        <div class="demoCol">narrow-pc</div>
      </m-col>
    </m-row>
    <m-row class="demoRow">
      <m-col span="24" :pc="{span:8}">
        <div class="demoCol">pc</div>
      </m-col>
    </m-row>
    <m-row class="demoRow">
      <m-col span="24" :wide-pc="{span:4}">
        <div class="demoCol">wide-pc</div>
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