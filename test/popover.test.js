const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置position.', (done) => {
    Vue.component('m-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <m-popover position="bottom" ref="a">
          <template slot="content">
              <div>vdbsbgfbghshsmghmjhvxdffgbdfgdfdgdgdgd</div>
          </template>
          <button>点我</button>
      </m-popover>
`
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })

  it('可以设置trigger.', (done) => {
    Vue.component('m-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <m-popover trigger="hover" ref="a">
          <template slot="content">
              <div>vdbsbgfbghshsmghmjhvxdffgbdfgdfdgdgdgd</div>
          </template>
          <button>点我</button>
      </m-popover>
`
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      let event = new Event('mouseenter')
      vm.$refs.a.$el.dispatchEvent(event)

      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper).to.exist
        done()
      })
    }, 200)
  })
})