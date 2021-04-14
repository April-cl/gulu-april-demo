const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
  it('存在.', () => {
    expect(Collapse).exist
  })

  it('接受selected属性', (done) => {
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)

    let div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-collapse :selected="selected">
            <g-collapse-item title="标题1" name="1"><span id="content-1">内容1</span></g-collapse-item>
            <g-collapse-item title="标题2" name="2"><span id="content-2">内容2</span></g-collapse-item>
            <g-collapse-item title="标题3" name="3"><span id="content-3">内容3</span></g-collapse-item>
        </g-collapse>`

    const vm = new Vue({
      el: div,
      data: {
        selected: ['1', '2']
      }
    })

    setTimeout(() => {
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })

  it('接受single属性', (done) => {
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-collapse single :selected.sync="selected">
            <g-collapse-item title="标题1" name="1" id="title-1"><span id="content-1">内容1</span></g-collapse-item>
            <g-collapse-item title="标题2" name="2" id="title-2"><span id="content-2">内容2</span></g-collapse-item>
            <g-collapse-item title="标题3" name="3" id="title-3"><span id="content-3">内容3</span></g-collapse-item>
        </g-collapse>`

    const vm = new Vue({
      el: div,
      data: {
        selected: ['1']
      }
    })

    setTimeout(() => {
      vm.$el.querySelector('#title-2').click()
      setTimeout(() => {
        expect(vm.$el.querySelector('#content-1')).to.not.exist
        expect(vm.$el.querySelector('#content-2')).to.exist
        done()
      })
    })
  })

  it('触发update:selected事件', (done) => {
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)

    const callback = sinon.fake()
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-collapse single :selected="selected" @update:selected="onSelect">
            <g-collapse-item title="标题1" name="1" id="title-1"><span id="content-1">内容1</span></g-collapse-item>
            <g-collapse-item title="标题2" name="2" id="title-2"><span id="content-2">内容2</span></g-collapse-item>
            <g-collapse-item title="标题3" name="3" id="title-3"><span id="content-3">内容3</span></g-collapse-item>
        </g-collapse>`

    const vm = new Vue({
      el: div,
      data: {
        selected: ['1']
      },
      methods: {
        onSelect: callback
      }
    })

    setTimeout(() => {
      vm.$el.querySelector('#title-2').click()
      setTimeout(() => {
        expect(callback).have.to.been.called
        done()
      })
    })
  })
})