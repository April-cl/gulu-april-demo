<template>
  <div>
    <m-row class="demoRow">
      <m-col span="24">
        <div class="demoCol">24</div>
      </m-col>
    </m-row>

    <m-row class="demoRow">
      <m-col span="12">
        <div class="demoCol">12</div>
      </m-col>
      <m-col span="12">
        <div class="demoCol">12</div>
      </m-col>
    </m-row>

    <m-row class="demoRow">
      <m-col span="8">
        <div class="demoCol">8</div>
      </m-col>
      <m-col span="8">
        <div class="demoCol">8</div>
      </m-col>
      <m-col span="8">
        <div class="demoCol">8</div>
      </m-col>
    </m-row>

    <m-row class="demoRow">
      <m-col span="6">
        <div class="demoCol">6</div>
      </m-col>
      <m-col span="6">
        <div class="demoCol">6</div>
      </m-col>
      <m-col span="6">
        <div class="demoCol">6</div>
      </m-col>
      <m-col span="6">
        <div class="demoCol">6</div>
      </m-col>
    </m-row>

    <m-row class="demoRow">
      <m-col span="4">
        <div class="demoCol">4</div>
      </m-col>
      <m-col span="4">
        <div class="demoCol">4</div>
      </m-col>
      <m-col span="4">
        <div class="demoCol">4</div>
      </m-col>
      <m-col span="4">
        <div class="demoCol">4</div>
      </m-col>
      <m-col span="4">
        <div class="demoCol">4</div>
      </m-col>
      <m-col span="4">
        <div class="demoCol">4</div>
      </m-col>
    </m-row>

    <m-row class="demoRow">
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
      </m-col>
      <m-col span="2">
        <div class="demoCol">2</div>
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

<style scoped>
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