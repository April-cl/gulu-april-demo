---
title: Collapse - 折叠面板
---
# Collapse - 折叠面板

可以折叠/展开的内容区域。

## 预览
<br />
<ClientOnly>
<collapse-demo />
</ClientOnly>

## 代码展示
```vue
<div>
  <h2>单选面板</h2>
  <m-collapse :selected.sync="selected1" single>
    <m-collapse-item title="我是标题1" name="单选面板1">我是单选面板1</m-collapse-item>
    <m-collapse-item title="我是标题2" name="单选面板2">我是单选面板2</m-collapse-item>
    <m-collapse-item title="我是标题3" name="单选面板3">我是单选面板3</m-collapse-item>
  </m-collapse>
</div>
<div>
  <h2>多选面板</h2>
  <m-collapse :selected.sync="selected2">
    <m-collapse-item title="我是标题1" name="多选面板1">我是多选面板1</m-collapse-item>
    <m-collapse-item title="我是标题2" name="多选面板2">我是多选面板2</m-collapse-item>
    <m-collapse-item title="我是标题3" name="多选面板3">我是多选面板3</m-collapse-item>
  </m-collapse>
</div>
```

## 折叠面板属性

父组件 `Collapse`
| 属性        | 说明                         | 类型     | 默认值  | 取值            |
| ---------- | ---------------------------- | :-----: | :----: | :------------: |
| selected   | 设置活动面板，取值为面板的name值  | string  | -      | -              |
| single     | 设置只显示一个面板（手风琴模式）   | boolean | false  | true \| false  |

子组件 `CollapseItem`
| 属性    | 说明                                            | 类型     | 默认值  | 取值            |
| ------ | ---------------------------------------------- | :-----: | :----: | :------------: |
| name   | 设置面板标志，父组件的 `selected` 通过此值标记展开面板 | string  | -      | -              |
| title  | 设置面板标题                                      | boolean | false  | true \| false  |