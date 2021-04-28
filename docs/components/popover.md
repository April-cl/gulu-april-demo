---
title: Popover - 弹出层
---
# Popover - 弹出层

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 预览
<br />
<ClientOnly>
<popover-demo />
</ClientOnly>

## 代码展示
```vue
<m-popover>
  <m-button>点我弹出气泡卡片</m-button>
  <template slot="content">我是气泡卡片</template>
</m-popover>
<br>
<m-popover trigger="hover">
  <m-button>摸我弹出气泡卡片（鼠标移入）</m-button>
  <template slot="content">我是气泡卡片</template>
</m-popover>
<br>
<m-popover position="right">
  <m-button>点我从右边弹出气泡卡片</m-button>
  <template slot="content">我是气泡卡片</template>
</m-popover>
```

## 弹出层属性
| 属性       | 说明               | 类型     | 默认值  | 取值                                          |
| --------- | ----------------- | :-----: | :----: | :-------------------------------------------: |
| position  | 设置弹出层位置       | string  | top    | 目前支持的取值有 top \| bottom \| left \| right  |
| trigger   | 设置触发弹出层的方式  | string  | click  | click \| hover                                |