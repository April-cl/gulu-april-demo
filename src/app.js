import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Sider from './sider'
import Header from './header'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  methods: {
    showToast() {
      this.$toast('<p><strong>文字</strong></p>', {
        autoClose: false,
        closeButton: {
          text: '我知道了',
          callback() {
            console.log('知道了')
          }
        },
        position: 'top'
      })
    }

  }
});
