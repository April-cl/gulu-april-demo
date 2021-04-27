---
title: Tabs - 标签
---
# Tabs - 标签

选项卡切换组件。

## 预览
<br />
<ClientOnly>
<tabs-demo />
</ClientOnly>

## 代码展示
```vue
<div>
<h2>我是横向标签页</h2>
<g-tabs :selected.sync="selectedTab">
  <g-tabs-head>
    <g-tabs-item name="1">标签1</g-tabs-item>
    <g-tabs-item name="2" disabled>标签2</g-tabs-item>
    <g-tabs-item name="3">标签3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">内容1</g-tabs-pane>
    <g-tabs-pane name="2">内容2</g-tabs-pane>
    <g-tabs-pane name="3">内容3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
</div>
<div>
<h2>我是纵向标签页</h2>
<g-tabs :selected.sync="selectedTab" direction="vertical">
  <g-tabs-head>
    <g-tabs-item name="1">标签1</g-tabs-item>
    <g-tabs-item name="2">标签2</g-tabs-item>
    <g-tabs-item name="3">标签3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">内容1</g-tabs-pane>
    <g-tabs-pane name="2">内容2</g-tabs-pane>
    <g-tabs-pane name="3">内容3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
</div>
  ```

## 标签属性

组件结构
```vue
<g-tabs>
<g-tabs-head>
  <g-tabs-item>标签</g-tabs-item>
</g-tabs-head>
<g-tabs-body>
  <g-tabs-pane>内容</g-tabs-pane>
</g-tabs-body>
</g-tabs>
```

`Tabs`
| 属性        | 说明                         | 类型     | 默认值      | 取值                     |
| ---------- | ---------------------------- | :-----: | :--------: | :---------------------: |
| selected   | 设置活动标签，取值为标签的name值  | string  | -          | -                       |
| direction  | 设置标签方向                   | string  | horizontal | horizontal \| vertical  |

`TabsItem`
| 属性      | 说明                                            | 类型    | 默认值  | 取值            |
| -------- | ---------------------------------------------- | :-----: | :----: | :------------: |
| name     | 设置标签标志，父组件的 `selected` 通过此值标记展开面板 | string  | -      | -              |
| disabled | 设置标签不可用                                    | boolean | false  | true \| false  |

`TabsPane`
| 属性    | 说明                                            | 类型     | 默认值  | 取值           |
| ------ | ---------------------------------------------- | :-----: | :----: | :------------: |
| name   | 设置标签标志，父组件的 `selected` 通过此值标记展开面板 | string  | -      | -              |