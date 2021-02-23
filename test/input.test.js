const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    it('接收value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
      vm.$destroy()
    })
    it('接收disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it('接收readonly', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })
    it('接收error', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: 'error'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('error')
      vm.$destroy()
    })
  })

  describe('events', () => {
    it('支持change事件', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('change', callback)
      let event = new Event('change')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.called
    })
    it('支持input事件', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('input', callback)
      let event = new Event('input')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.called
    })
    it('支持focus件', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('focus', callback)
      let event = new Event('focus')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.called
    })
    it('支持blur事件', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('blur', callback)
      let event = new Event('blur')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.called
    })
  })
})