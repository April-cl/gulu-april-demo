const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
  it('接收span属性.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收pc, ipad, narrow-pc, wide-pc属性.', () => {
    ['pc', 'ipad', 'narrow-pc', 'wide-pc'].forEach(deviceName => {
      const deviceSpan = 'col-' + deviceName +'-1'
      const deviceOffset = 'offset-' + deviceName + '-2'
      if (deviceName.includes('-')) {
        const index = deviceName.indexOf('-')+1
        deviceName = deviceName.substring(0, index-1) + deviceName.substring(index, index+1).toUpperCase() + deviceName.substring(index+1)
      }
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const propsData = {}
      propsData[deviceName] = {span: 1, offset: 2}
      const vm = new Constructor({
        propsData
      }).$mount(div)
      const element = vm.$el
      expect(element.classList.contains(deviceSpan)).to.equal(true)
      expect(element.classList.contains(deviceOffset)).to.equal(true)
    })
  })
})