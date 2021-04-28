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
<m-tabs :selected.sync="selectedTab">
  <m-tabs-head>
    <m-tabs-item name="1">标签1</m-tabs-item>
    <m-tabs-item name="2" disabled>标签2</m-tabs-item>
    <m-tabs-item name="3">标签3</m-tabs-item>
  </m-tabs-head>
  <m-tabs-body>
    <m-tabs-pane name="1">内容1</m-tabs-pane>
    <m-tabs-pane name="2">内容2</m-tabs-pane>
    <m-tabs-pane name="3">内容3</m-tabs-pane>
  </m-tabs-body>
</m-tabs>
</div>
<div>
<h2>我是纵向标签页</h2>
<m-tabs :selected.sync="selectedTab" direction="vertical">
  <m-tabs-head>
    <m-tabs-item name="1">标签1</m-tabs-item>
    <m-tabs-item name="2">标签2</m-tabs-item>
    <m-tabs-item name="3">标签3</m-tabs-item>
  </m-tabs-head>
  <m-tabs-body>
    <m-tabs-pane name="1">内容1</m-tabs-pane>
    <m-tabs-pane name="2">内容2</m-tabs-pane>
    <m-tabs-pane name="3">内容3</m-tabs-pane>
  </m-tabs-body>
</m-tabs>
</div>
  ```

## 标签属性

组件结构
```vue
<m-tabs>
<m-tabs-head>
  <m-tabs-item>标签</m-tabs-item>
</m-tabs-head>
<m-tabs-body>
  <m-tabs-pane>内容</m-tabs-pane>
</m-tabs-body>
</m-tabs>
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