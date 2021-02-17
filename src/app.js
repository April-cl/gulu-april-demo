import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
});

import chai from 'chai';

const expect = chai.expect;

// 单元测试
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount('#test');
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  console.log(useElement);
  expect(href).to.eq('#i-settings');
  vm.$el.remove();
  vm.$destroy();
}